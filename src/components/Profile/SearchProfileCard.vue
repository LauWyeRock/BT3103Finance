<template>
  <a :href="'/profile/' + uid" style="text-decoration-line: none; color: black">
    <div class="profile-card-box">
      <div class="profile-picture-box">
        <img
          :src="
            profile.profilePicture != '' && profile.profilePicture
              ? profile.profilePicture
              : 'https://profiles.ucr.edu/app/images/default-profile.jpg'
          "
          alt="profile_picture"
          class="profile-picture"
        />
      </div>
      <div class="profile-info-container">
        <div class="profile-info">
          <h1 class="profile-name">{{ profile.displayName }}</h1>
          <h3 class="profile-email">
            {{ profile.followers.length }} followers
          </h3>
        </div>
        <div
          style="
            min-width: 30px;
            /* background-color: yellow; */
            align-items: center;
            justify-content: center;
            display: flex;
            /* border: 1px solid black; */
            /* border-radius: 12px; */
            width: 20%;
            padding: 10px;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            width="50px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "SearchProfileCard",
  props: ["uid", "profile"],
};
</script>

<style>
.profile-info-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  /* background-color: aquamarine; */
}
.profile-card-box {
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
  font-size: 1.6em;
}

.profile-email {
  font-size: 1em;
}
</style>
