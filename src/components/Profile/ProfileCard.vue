<template>
  <div className="Profile-Main-Card">
    <div className="Profile-Banner"></div>
    <div className="Profile-Picture">
      <img
        style="
          border-radius: 50%;
          width: 220px;
          height: 220px;
          object-fit: cover;
        "
        src="https://assets.pandaily.com/uploads/2022/05/%E9%A3%9E%E4%B9%A620220516-220550.jpg"
      />
    </div>

    <div className="Profile-Card-Content">
      <div className="Like-For-Real-Profile-Card-Content">
        <div className="Profile-Card-Information">
          <h1
            style="
              margin-bottom: 0px;
              /* font-family: 'Playfair Display'; */
              font-style: normal;
              font-weight: 700;
              font-size: 60px;
              /* line-height: 74px; */
              letter-spacing: 0px;
            "
          >
            <!-- Thomathus Reginald Swift -->
            <!-- Shashank Shekhar Tripathi -->
            Ma Yi Long
          </h1>
          <h2
            style="
              margin-top: 0px;
              margin-bottom: 10px;
              font-style: normal;
              font-weight: 400;
              font-size: 35px;
              /* line-height: 74px; */
            "
          >
            @RealElonMask
          </h2>
          <h3 style="font-style: normal; font-weight: 400; font-size: 22px">
            Junior Trader
          </h3>
          <h3 style="font-style: normal; font-weight: 400; font-size: 22px">
            Contribution Score : 5010101
          </h3>
        </div>

        <div className="Profile-Card-Buttons">
          <button
            style="
              float: right;
              background: rgba(95, 31, 95, 0.8);
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 10px;
              margin-right: 1px;
              margin-left: 1px;
            "
          >
            Add as friend
          </button>
          <button
            style="
              float: right;
              background: rgba(95, 31, 95, 0.8);
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 10px;
              margin-right: 1px;
              margin-left: 1px;
            "
          >
            View Post History
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// needs 2 views, one with own user one where someone else views your page
// export default {};
</script>

<style>
.Profile-Main-Card {
  position: relative;
  margin-top: 10px;
  align-content: center;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-bottom: 10px;
}

.Profile-Banner {
  position: absolute;
  width: 100%;
  height: 190px;

  background: url(https://cdn.pixabay.com/photo/2021/03/14/18/25/graffiti-6095045_1280.jpg);
  border-radius: 10px 10px 0px 0px;
}

.Profile-Picture {
  position: absolute;
  margin-left: 60px;
  margin-top: 150px;
}

.Profile-Card-Content {
  box-sizing: border-box;

  /* position: absolute; */
  width: 100%;
  height: 400px;

  background: linear-gradient(
    180deg,
    rgba(161, 195, 209, 0.75) 46.38%,
    rgba(241, 114, 161, 0.5) 100%
  );
  border: 1px solid #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.Like-For-Real-Profile-Card-Content {
  margin-top: 190px;
  margin-left: 300px;
}

.Profile-Card-Information {
  float: left;
}

.Profile-Card-Buttons {
  margin-right: 20px;
}

@media only screen and (max-width: 1200px) {
  .Profile-Card-Content {
    height: 520px;
  }
}
</style>
