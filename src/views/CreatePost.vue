<template>
    <div class="create-post">
        <blog-cover-preview v-show="this.$store.state.blogPhotoPreview"/>
        <div class="container">
            <div :class="{invisible : !error}" class="err-message">
                <p><span>Error:</span>{{ this.errorMsg}}</p>
            </div>
            <div class="blog-info">
                <div class="titleplaceholder">Blog Title</div>
                <input class="titlebox" type="text" v-model="blogTitle" />
                <div class="upload-file">
                    <label class='uploadbtn' for="blog-photo">Upload Cover photo</label>
                    <input type="file" ref="blogPhoto" id="blog-photo" @change="fileChange" accept=".png, .jpg, .jpeg" />
                    <button @click="openPreview" class="previewbtn" :class="{ 'button-inactive': !this.$store.state.blogPhotoFileURL }">Preview Photo</button>
                    <!-- <button class="preview" :class="{ 'button-inactive': !store.state.blogPhotoFileURL }">Preview Photo</button> -->

                    <span>File chosen: {{ this.$store.state.blogPhotoName}}</span>
                </div>
                <div class="editor">
                    <vue-editor :editorOptions="editorSettings" v-model="blogHTML" useCustomImageHandler @image-added="imageHandler" />
                </div>
                <div class="blog-actions">
                    <button class="publishbtn" @click="uploadBlog">Publish Blog</button>
                    <router-link class="router-button" to="#">Post preview</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Quill from "quill";
import { VueEditor } from "vue3-editor";
import BlogCoverPreview from "@/components/BlogCoverPreview.vue";
import { ref, getStorage, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
// eslint-disable-next-line no-unused-vars
import { collection, doc, getDocs, getDoc, setDoc, addDoc } from "@firebase/firestore";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/firebase/firebase";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
export default {
    name: "CreatePost",
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.user = user;
          }
        })
      },
 
    data() {
        return {
            file:null,
            error: null,
            user: false,
            docRef: null,
            errorMsg: null,
            editorSettings: {
                modules: {
                    imageResize: {},
                }
            }
        }
    },
    methods: {
        fileChange() {
            this.file = this.$refs.blogPhoto.files[0];
            const fileName = this.file.name;
            this.$store.commit("fileNameChange", fileName);
            this.$store.commit("createFileURL", URL.createObjectURL(this.file));
        },
        openPreview() {
            this.$store.commit("openPhotoPreview")
        },
        imageHandler(file, Editor, cursorLocation, resetUploader) {
            const docRef = ref(getStorage(), `documents/blogPostPhotos/${file.name}`)
            const uploadTask = uploadBytesResumable(docRef, file);
            uploadTask.on('state_changed',
            (snapshot) => {
                console.log(snapshot);
            },
            (err) => {
                console.log(err)
            }, async () => {
                const downloadURL = await getDownloadURL(docRef);
                Editor.insertEmbed(cursorLocation, "image", downloadURL);
                resetUploader;
                console.log("Hi")
            }
            )
        },
        uploadBlog() {
            if (this.blogTitle.length !== 0 && this.blogHTML.length !== 0) {
                if (this.file) {
                    const docRef = ref(getStorage(), `documents/BlogCoverPhotos/${this.$store.state.blogPhotoName}`)
                    const uploadTask = uploadBytesResumable(docRef, this.file)
                    uploadTask.on('state_changed', 
                    (snapshot) => {
                        console.log(snapshot)
                    },
                    (err) => {
                        console.log(err)
                    }, async () => {
                        const downloadURL = await getDownloadURL(docRef);
                        const timestamp = await Date.now();

                        const dataBase = collection(db, "blogPosts")
                        this.docRef = await addDoc(dataBase, {
                            blogID: doc(dataBase).id,
                            blogHTML: this.blogHTML,
                            blogCoverPhoto: downloadURL,
                            blogCoverPhotoName: this.blogCoverPhotoName,
                            blogTitle: this.blogTitle, 
                            profileId: this.user.uid,
                            date:timestamp,
                        }).then(async docRef => {
                            await setDoc(doc(db, "blogPosts", docRef.id), {
                                //blogID: doc(dataBase).id,
                                blogID: docRef.id,
                                blogHTML: this.blogHTML,
                                blogCoverPhoto: downloadURL,
                                blogCoverPhotoName: this.blogCoverPhotoName,
                                blogTitle: this.blogTitle, 
                                profileId: this.user.uid,
                                date:timestamp,
                                ref: docRef.id
                            })
                        })
                        
                        await this.$store.dispatch("getPost")
                        this.$router.push({name: "Forum"})
                    })
                    return;
                }
                this.error=true;
                this.errorMsg = "Please ensure you uploaded a cover photo!";
                setTimeout(()=> {
                    this.error= false;
                }, 5000);
                return;
            }
        },                                                                         
    },
    components: {
    VueEditor,
    BlogCoverPreview
},
    computed: {
        profileId () {
            return this.$store.state.profileId;
        },
        blogCoverPhotoName() {
            return this.$store.state.blogPhotoName;
        },
        blogTitle : {
            get() {
                return this.$store.state.blogTitle;
            },
            set(payload) {
                this.$store.commit("updateBlogTitle",payload)
            }
        },
        blogHTML : {
            get() {
                return this.$store.state.blogHTML;
            },
            set(payload) {
                this.$store.commit("newBlogPost",payload)
            }
        }
    }
}
</script>
<style lang="scss">
.create-post {
    position:relative;
    height: 100%;
    background-image: repeating-linear-gradient(
		rgba(240, 235, 244, 1), 
		rgba(161, 195, 209, 0.5), 
		rgba(241, 114, 161, 0.5)
		);

    .router-button {
        text-decoration: none;
        color: #fff;
    }

    label,
    .previewbtn,
    .publishbtn,
    .router-button {
        // transition: 0.5s ease-in-out all;
        align-self: center;
        font-size: 14px;
        font-weight:bold;
        cursor: pointer;
        border-radius: 5px;
        padding: 12px 24px;
        color: purple;
        background-color: rgb(251, 243, 234);

        &:hover {
            background-color: rgba(48,48,48,0.4);
        }
    }

    .titlebox {
        height: 60px;
        font-size: 30px;
    }

    .titleplaceholder {
        font-size: 30px;
        margin-bottom: 10px;
    }

    .container {
        position: relative;
        height: 100%;
        width: 1000px;
        // padding: 10px 25px 60px
    }

    .invisible {
        opacity: 0 !important;
    }

    .err-message {
        width:100%;
        padding:12px;
        border-radius: 8px;
        color: #fff;
        margin-bottom: 10px;
        background-color: #303030;
        opacity: 1;
        transition: 0.5s ease all;

        p {
           font-size: 14px; 
        }
        span {
            font-weight: 600;
        }
    }

    .blog-info {

        margin-bottom: 32px;
        // background-color: white;

        // input:nth-child(1) {
        //     min-width: 300px;
        // }
        // input {
        //     transition: 0.5s ease-in-out all;
        //     padding: 10px 4px;
        //     border: none;
        //     border-bottom: 1px solid #303030;

        //     &:focus {
        //         outline:none;
        //         box-shadow: 0 1px 0 0 #303030;
        //     }
        // }

        .upload-file {
            position: relative;
            display:flex;
            margin-top: 30;

            input{
                display: none;
            }

            .previewbtn {
                margin-left: 16px;
                // margin-top: 35;
                margin-bottom: 30px;
                text-transform: initial;
            }

            .uploadbtn {
                margin-left: 0px;
            }   

            span {
                font-size: 15px;
                margin-left: 16px;
                align-self: center;   
            }
        }
    }

    .button-inactive {
        background-color: lightgrey;
        color: white;
        margin-top:30px;
    }

    .editor {
        height:60vh;
        display:flex;
        flex-direction: column;
    }
    
    // .quillWrapper{ 
    //     position: relative;
    //     display: flex;
    //     flex-direction: column;
    //     height: 100%;
    // }

    // .ql-container {
    //     display: flex;
    //     flex-direction: column;
    //     height: 100%;
    //     overflow: scroll;
    // }

    .ql-editor {
        padding: 20px 16px 30px;
    }

    .blog-actions {
        margin-top: 32px;

        button {
            margin-right: 16px;
        }
    }
}

</style>