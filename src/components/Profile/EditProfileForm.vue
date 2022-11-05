<template>
  <form
    style="
      padding: 2rem;
      padding-left: 5rem;
      padding-right: 5rem;
      border-top-width: 1px;
      border-color: #e5e7eb;
      box-sizing: border-box;
    "
  >
    <div
      style="
        margin-top: 2rem;
        border-top-width: 1px;
        border-color: #e5e7eb;

        @media (min-width: 640px) {
          margin-top: 1.25rem;
        }
      "
    >
      <div
        style="
          margin-top: 1.5rem;

          @media (min-width: 640px) {
            margin-top: 1.25rem;
          }
        "
      >
        <!-- header -->
        <div className="Form Header">
          <h3
            style="
              color: #111827;
              font-size: 2rem;
              line-height: 1.75rem;
              font-weight: 500;
              line-height: 1.5rem;
            "
          >
            Edit Profile
          </h3>
          <p
            style="
              margin-top: 0.75rem;
              color: #6b7280;
              font-size: 0.875rem;
              line-height: 1.25rem;
              max-width: 42rem;
            "
          >
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>

        <!-- displayName -->
        <div className="edit-form-row-container">
          <label className="form-row-label">Display Name</label>
          <div
            style="
              margin-top: 0.25rem;

              @media (min-width: 640px) {
                margin-top: 0;
                grid-column: span 2 / span 2;
              }
            "
          >
            <input
              className="long-text-box"
              type="text"
              id="displayName"
              v-bind:defaultValue="profile.displayName"
              required
            />
          </div>
        </div>
      </div>
      <!-- profile picture -->
      <div className="edit-form-row-container">
        <label className="form-row-label">Profile Picture</label>
        <div style="margin-top: 0.25rem">
          <div style="display: flex; align-items: center">
            <span
              style="
                overflow: hidden;
                background-color: #f3f4f6;
                width: 7rem;
                height: 7rem;
                border-radius: 9999px;
              "
            >
              <!-- conditionally render this svg and replace it with image if we can get it -->
              <svg
                style="color: #d1d5db; width: 100%; height: 100%"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            <label
              style="
                margin-left: 1rem;
                background-color: transparent;
                color: #4f46e5;
                font-weight: 500;
                border-radius: 0.375rem;
                cursor: pointer;
              "
            >
              <p>Upload a file</p>
              <input type="file" />
            </label>
          </div>
        </div>
      </div>
      <!-- cover photo -->
      <div className="edit-form-row-container">
        <label className="form-row-label">Cover Photo</label>

        <div
          style="
            display: flex;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding-top: 1.25rem;
            padding-bottom: 1.5rem;
            justify-content: center;
            max-width: 32rem;
            border-radius: 0.375rem;
            border-width: 2px;
            border-color: #9ca3af;
            border-style: dashed;
          "
        >
          <div style="margin-top: 0.25rem; text-align: center">
            <!-- this svg can replace with the image that u uploaded with turnary operator -->
            <svg
              style="color: #9ca3af; width: 3rem; height: 3rem"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div
              style="
                display: flex;
                color: #4b5563;
                font-size: 0.875rem;
                line-height: 1.25rem;
              "
            >
              <label
                style="
                  position: relative;
                  background-color: transparent;
                  color: #4f46e5;
                  font-weight: 500;
                  border-radius: 0.375rem;
                  cursor: pointer;
                  text-align: center;
                "
                ><span>Upload a file</span>
                <br />
                <input
                  className="specific-input"
                  type="file"
                  style="margin-left: 11.5rem"
                />
              </label>
            </div>
            <p style="color: #6b7280; font-size: 0.75rem; line-height: 1rem">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
      <!-- about -->
      <div className="edit-form-row-container">
        <label className="form-row-label">About</label>
        <div style="margin-top: 0.25rem">
          <textarea
            name="about"
            v-bind:defaultValue="profile.about"
            id="about"
            cols="30"
            rows="5"
            style="
              background-color: transparent;
              padding: 3px;
              display: block;
              width: 100%;
              max-width: 32rem;
              border-radius: 0.375rem;
              border-color: #9ca3af;
              box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            "
          ></textarea>
        </div>
      </div>
      <!-- social links -->
      <div className="edit-form-row-container">
        <label className="form-row-label">Social Links</label>
        <div
          style="
            display: flex;
            max-width: 32rem;
            border-radius: 0.375rem;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          "
        >
          <span
            style="
              display: inline-flex;
              padding-left: 0.75rem;
              padding-right: 0.75rem;
              background-color: transparent;
              color: #6b7280;
              align-items: center;
              border-top-left-radius: 0.375rem;
              border-bottom-left-radius: 0.375rem;
              border-width: 2px;
              border-right-width: 0;
              border-color: #d1d5db;
            "
            >linkedin.com/</span
          >
          <input
            id="linkedin"
            type="text"
            v-bind:defaultValue="linkedin"
            style="
              padding: 3px;
              display: block;
              flex: 1 1 0%;
              width: 100%;
              min-width: 0;
              border-radius: 0;
              border-top-right-radius: 0.375rem;
              border-bottom-right-radius: 0.375rem;
              border-color: #d1d5db;
              background-color: transparent;
            "
          />
        </div>
        <br />
        <label className="form-row-label"></label>
        <div
          style="
            display: flex;
            max-width: 32rem;
            border-radius: 0.375rem;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          "
        >
          <span
            style="
              display: inline-flex;
              padding-left: 0.75rem;
              padding-right: 0.75rem;
              background-color: transparent;
              color: #6b7280;
              align-items: center;
              border-top-left-radius: 0.375rem;
              border-bottom-left-radius: 0.375rem;
              border-width: 1px;
              border-right-width: 0;
              border-color: #d1d5db;
            "
            >github.com/</span
          >
          <input
            id="github"
            type="text"
            v-bind:defaultValue="github"
            style="
              padding: 3px;
              display: block;
              flex: 1 1 0%;
              width: 100%;
              min-width: 0;
              border-radius: 0;
              border-top-right-radius: 0.375rem;
              border-bottom-right-radius: 0.375rem;
              border-color: #d1d5db;
              background-color: transparent;
            "
          />
        </div>
        <br />
        <label className="form-row-label"></label>
        <div
          style="
            display: flex;
            max-width: 32rem;
            border-radius: 0.375rem;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          "
        >
          <span
            style="
              display: inline-flex;
              padding-left: 0.75rem;
              padding-right: 0.75rem;
              background-color: transparent;
              color: #6b7280;
              align-items: center;
              border-top-left-radius: 0.375rem;
              border-bottom-left-radius: 0.375rem;
              border-width: 1px;
              border-right-width: 0;
              border-color: #d1d5db;
            "
            >Personal Website:</span
          >
          <input
            type="url"
            v-bind:defaultValue="profile.links.personalSite"
            id="personalsite"
            style="
              padding: 3px;
              display: block;
              flex: 1 1 0%;
              width: 100%;
              min-width: 0;
              border-radius: 0;
              border-top-right-radius: 0.375rem;
              border-bottom-right-radius: 0.375rem;
              border-color: #d1d5db;
              background-color: transparent;
            "
          />
        </div>
      </div>
    </div>

    <div
      style="
        padding-top: 1.25rem;
        border-top-style: solid;
        border-top-width: 1px;
        border-color: #9ca3af;
      "
    >
      <div style="display: flex; justify-content: center">
        <button
          className="submit-button"
          type="button"
          v-on:click="saveButtonHandler()"
        >
          Save
        </button>
      </div>
      <div style="display: flex; justify-content: center">
        <button
          className="submit-button"
          type="button"
          v-on:click="getUserProfile()"
        >
          Log User Profile
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { getAuth } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

export default {
  async setup() {
    try {
      console.log("Setup: call getprofile");
      var profile = await getProfile();
      if (profile == null) {
        //might be creating new profile. call getprofile again.
        console.log("retrieving profile 2: creation.");
        profile = await getProfile();
      }
      console.log("got profile.");
      console.log(profile);
      var linkedin = "";
      var github = "";
      if (profile.links.linkedin != "") {
        linkedin = profile.links.linkedin.substring(13);
      }
      if (profile.links.github != "") {
        linkedin = profile.links.github.substring(11);
      }
    } catch (e) {
      console.error("error in setup" + e);
    }
    return {
      profile,
      linkedin,
      github,
    };
  },
  methods: {
    async getUserProfile() {
      const auth = getAuth();
      const uid = auth.currentUser.uid;

      const docRef = doc(db, "profiles", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    saveButtonHandler() {
      const auth = getAuth();
      const uid = auth.currentUser.uid;

      var displayName = document.getElementById("displayName").value;
      var about = document.getElementById("about").value;

      var links = {
        linkedin: "",
        github: "",
        personalSite: "",
      };
      var linkedin =
        "linkedin.com/" + document.getElementById("linkedin").value;
      var github = "github.com/" + document.getElementById("github").value;
      var personalSite = document.getElementById("personalsite").value;

      const isValidUrl = (urlString) => {
        var urlPattern = new RegExp(
          "^(https?:\\/\\/)?" + // validate protocol //eslint-disable-line
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name //eslint-disable-line
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address //eslint-disable-line
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path //eslint-disable-line
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string //eslint-disable-line
            "(\\#[-a-z\\d_]*)?$",
          "i"
        ); // validate fragment locator
        return !!urlPattern.test(urlString);
      };

      if (linkedin.includes(" ")) {
        //urls cannot have a space!
        //invalid
        console.warn("invalid url for linkedin");
        linkedin = "";
      } else if (!isValidUrl(linkedin)) {
        console.warn(
          "invalid url for linkedinL failed regex test: " + linkedin
        );
        linkedin = "";
      } else if (linkedin == "linkedin.com/") {
        linkedin = "";
      } else if (linkedin != "") {
        links.linkedin = linkedin;
      }

      if (github.includes(" ")) {
        //invalid
        console.warn("invalid url for github");
        github = "";
      } else if (!isValidUrl(github)) {
        console.warn("invalid url for github! : failed regex test: " + github);
        github = "";
      } else if (github == "github.com/") {
        github = "";
      } else if (github != "") {
        links.github = github;
      }

      if (personalSite.includes(" ")) {
        //invalid
        console.warn("invalid url for personal site");
        personalSite = "";
      } else if (!isValidUrl(personalSite)) {
        //invalid
        console.warn("invalid url for personal site");
        personalSite = "";
      } else {
        links.personalSite = personalSite;
      }

      console.log("DisplayName: " + displayName);
      console.log("About: " + about);
      console.log("Links: " + links);

      setDoc(
        doc(db, "profiles", uid),
        {
          displayName: displayName,
          about: about,
          links: links,
        },
        { merge: true }
      )
        .then(() => {
          console.log("updated...");
          alert("Profile Updated Successfully!");
        })
        .catch((error) => {
          //error
          console.error(
            "oh no something went wrong with setting profile!" + error
          );
        });
    },
  },
};

function getUserId() {
  return new Promise((resolve, reject) => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        console.log("1st uid:" + uid);
        resolve(uid);
      } else {
        console.log("sad didnt work.");
        reject();
      }
    });
  });
}
async function getProfile() {
  const uid = await getUserId();
  console.info("2nd uid: " + uid);

  const docRef = doc(db, "profiles", uid);

  console.log("got docref");
  const docSnap = await getDoc(docRef);
  console.log("get for docsnap");

  if (docSnap.exists()) {
    const data = docSnap.data();
    console.info("successfully got profile: " + data);
    return data;
  } else {
    //create a new profile for user who does not have a profile.
    var links = {
      linkedin: "",
      github: "",
      personalSite: "",
    };

    await setDoc(doc(db, "profiles", uid), {
      displayName: "new user",
      links: links,
      about: "Hi! I'm new to FinanceBois!",
      following: [],
      followers: [],
    })
      .then(() => {
        console.log("created new profile for user...");
      })
      .catch((error) => {
        //error
        console.error(
          "oh no something went wrong with creating new profile!" + error
        );
      });
  }
}

//todo:
//get profile info from firebase
//for everything in the profile that is not null, change the default values in the input fields

//bind the inputs as stuff that we can grab, then we can update them into the profile
</script>

<style>
form {
  background-image: repeating-linear-gradient(
    rgba(240, 235, 244, 1),
    rgba(161, 195, 209, 0.75),
    rgba(241, 114, 161, 0.5)
  );
}
.edit-form-row-container {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  padding-top: 1.25rem;
  align-items: flex-start;
  border-top-style: solid;
  border-top-width: 1px;
  border-color: #9ca3af;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.form-row-label {
  display: block;
  color: #374151;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}

.long-text-box {
  background-color: transparent;
  padding: 3px;
  display: block;
  width: 100%;
  max-width: 32rem;
  border-radius: 0.375rem;
  border-color: #d1d5db;
}
::-webkit-file-upload-button {
  display: none;
}
.submit-button {
  display: inline-flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 0.75rem;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  justify-content: center;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: transparent;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.submit-button:hover {
  background-color: #4338ca;
}
</style>
