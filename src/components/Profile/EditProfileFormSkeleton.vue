<template>
  <form
    style="
      padding: 2rem;
      padding-left: 5rem;
      padding-right: 5rem;
      border-top-width: 1px;
      border-color: #e5e7eb;
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
            If this is your first time creating an account, this might take a
            while...
          </p>
        </div>

        <!-- displayName -->
        <div className="edit-form-row-container">
          <label className="form-row-label">Display Name</label>
          <div class="profile-card">
            <div class="profile-info">
              <span class="long-loader" />
            </div>
          </div>
        </div>

        <!-- Profile Pic -->
        <div className="edit-form-row-container">
          <label className="form-row-label">Profile Picture</label>
          <div class="profile-card">
            <div class="profile-info">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <!-- Cover Photo -->
        <div className="edit-form-row-container">
          <label className="form-row-label">Cover Photo</label>
          <div class="profile-card">
            <div class="profile-info">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <!-- About -->
        <div className="edit-form-row-container">
          <label className="form-row-label">About</label>
          <div class="profile-card">
            <div class="profile-info">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <!-- Social Links -->
        <div className="edit-form-row-container">
          <label className="form-row-label">Social Links</label>
          <div class="profile-card">
            <div class="profile-info">
              <span />
              <br />
              <span />
              <br />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {};
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
  /* margin-top: 1rem;
  margin-bottom: 1rem;
  padding-top: 1.25rem;
  border-top-style: solid;
  border-top-width: 2px;
  border-color: #e5e7eb;
  gap: 1rem; */

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

.profile-card {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  box-sizing: border-box;
}
.profile-info {
  width: 85%;
  float: left;
}
.profile-info span {
  text-transform: uppercase;
  color: #777;
  letter-spacing: 3px;
}

.profile-info span {
  width: 100%;
  height: 16px;
  display: block;
  animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
  0% {
    background-color: #eee;
  }
  60% {
    background-color: #eaeaea;
  }
  100% {
    background-color: #eee;
  }
}
.long-loader {
  min-width: 32rem;
}
</style>
