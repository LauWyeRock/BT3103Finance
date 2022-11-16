<template>
  <div class="comment-card-box">
    <div class="comment-picture-box" id="profile-picture">
      <img
        :src="
          profile.profilePicture != '' && profile.profilePicture
            ? profile.profilePicture
            : 'https://profiles.ucr.edu/app/images/default-profile.jpg'
        "
        alt="profile_picture"
        class="comment-picture"
      />
    </div>
    <div class="comment-info-container">
      <div class="comment-info">
        <h2 style="margin-bottom: 0px" class="comment-name">
          {{ profile.displayName }}
        </h2>
        <h6 class="comment-date">posted on: {{ date }}</h6>
        <h3 class="comment-email">
          {{ comment }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForumComment",
  props: ["date", "profile", "comment"],
};
</script>

<style>
h1 {
  padding-bottom: 0px;
}
.comment-info-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  /* background-color: aquamarine; */
}
.comment-card-box {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  border: 1px #dddddd;
  padding: 20px;
  border-radius: 24px;
  background-color: white;
  width: 60%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.comment-picture-box {
  padding: 2vh;
  margin-right: 1vw;
}

.comment-picture {
  /* width: 80px;
  height: 80px; */
  border-radius: 50%;
  /* object-fit: contain; */
}

#profile-picture {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.comment-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: space-around; */
}

.comment-name {
  font-family: serif;
  letter-spacing: -1px;
  font-weight: bold;
  font-size: 1.6em;
}

.comment-email {
  font-size: 1em;
}

.comment-date {
  font-size: 0.75em;
  margin-bottom: 5px;
}
</style>
