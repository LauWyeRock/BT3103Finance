<template>
    <div class="profile-card-box">
        <div class="profile-picture-box">
            <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="profile_picture" class="profile-picture" />
        </div>
        <div class="profile-info">
            <h1 class="profile-name">Timothy Cheng</h1>
            <h3 class="profile-email">timcheng112@libro.com</h3>
            <h3 class="profile-email">10 followers</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchProfileCard",
    props: ["uid", "profile"]
}
</script>

<style>
.profile-card-box {
    display: flex;
    flex-direction: row;
    border: 1px #dddddd;
    padding: 20px;
    border-radius: 24px;
    background-color: white;
    width: 70%;
    margin: auto;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.profile-card-box:hover {
    background-color: #dddddd;
    opacity: 60%;
    cursor: pointer;
}

.profile-picture-box {
    padding: 2vh;
    margin-right: 1vw;
}

.profile-picture {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    /* object-fit: contain; */
}

.profile-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* justify-content: space-around; */
}

.profile-name {
    font-family: serif;
    letter-spacing: -1px;
    font-weight: bold;
    font-size: 1.6em
}

.profile-email {
    font-size: 1em
}
</style>