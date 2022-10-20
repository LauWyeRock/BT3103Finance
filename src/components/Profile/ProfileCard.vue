<template>
  <div className="Profile-Main-Card">
    <div className="Profile-Banner"></div>
    <div className="Profile-Picture">
      <img
        style="border-radius: 50%; width: 220px; height: 220px"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/%D0%A2%D0%B8%D0%BC_%D0%9A%D1%83%D0%BA_%2802-09-2021%29.jpg"
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
            Thomathus Reginald Swift
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
            @TommyCooker
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

  background: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBETEw8PEhMWDw0NFRIPDQ8NEBASFREWFhUSFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0mHyUtLS0vKy8tLS0vLS0tLS0tLy0vLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJcBTgMBEQACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAKBABAAICAAUFAAIDAQAAAAAAAAECAxEEITFhsRJBUXHxMoGRweFC/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAIDAQQFBgf/xAAuEQEAAgIBBAAFAwMFAQAAAAAAAQIDETEEEiEiBUFRYbEToeHB8PEyQoGR0XH/2gAMAwEAAhEDEQA/APkHOfUAAAAAAAAEMuKLRqf+wnS80ncKOp6anUU7L/4eXmxTSdT/AFPtLo0vF43Dx/U9Nfp79l/+J+qtNrgAAK8uPfOOvlmJa2fB3e0cqE3PAAAAAAAAAAAAAAAAAAAAAAAAAfTOI+sAAAAAAAAAIZcUWjU/idLzSdwo6npqdRTsv/h51sHpnn/XdvVyReNw8xbobYL6yefp9J/v9lV66WRO2plxTTjhFJSAAry49846+WYlrZ8Hd7V5UJueAAAAAAAAAAAAAAAAAAAAAAAA+mcR9YAAAAAAAAAARyUi0alKtprO4VZsNcte2zBlxzWdT+t6l4tG4eez4LY7dtv8s966WxO3Ly4ppO44RSVAAK8uPfOOvlmJa2fB3e1eVCbngAAAAAAAAAAAAAAAAAAAAAAPpnEfWAAAAAAAAAAAGPiM3q5R08tzFj7fMuH1vVRlntrxChc0JiJ8SpvTScTtoZcU08/JFJUAAoza339067c/qZp3eOfmrZawAAAAAAAAAAAAAAAAAAAAAD6ZxH1gAAAAAAAAABj4jPvlHTy28WLXmeXF6zrP1PSnH5/hQvc8AGJiJ8SpvXScTtoZcU0/+IpKlWXJrlCUQ1M+fXrXlSk0QAAAAAAAAAAAAAAAAAAAAAAH0ziPrAAAAAAAAADHxGffKOnlt4sWvM8uL1nWfqelOPz/AAoXueAAADExExqWXiJ9PT/Pwtr55cbrLTj8V/7+jMscsAAAAAAAAAAAAAAAAAAAAAAB2tJkmU6Y7X4fSuI+qgAAAAAAAMfEZ98o6eW3ixa8zy4vWdZ+p6U4/P8AChe54AAACF7pRDWzZteteVUwm0piJjUs+SmvpOJ252bDNJ3HCDKgAAAAAAAAAAAAAAAAAAAABKlNkzpZixTedQ0VjSt060isah7jkPoIAAAAAADJxGbfKOnlt4sWvMuL1nV9/pTj8/wzr3PAAAAQvdKIa2bNrxXlUm0wCYGJiJjUs+SmvpOJ25ubDNJ+yDKkAAAAAAAAAAAAAAAAAABKlNsTOlmLFN51DRWNIOnWkVjUOiT2cd4tG4cq1ZrOpe6w5qZqRek+EkVoAAAADNmy75R08r6U15lzuo6ju9a8flRaF8TpoZMfd5jlBY1QAAEL3SiGtmza9aqk2mAAATAxMRMalnyU19JxO3NzYZpP2QZUgAAAAAAAAAAAAAAAAJUpsmdLMWOck6horGlbp0pFY1DokAt4fNNJ7e8K8mOLxpt9H1l+mvuPMTzH1/l6mO8WjcdHOtWazqXr8OamakXpO4SRWgAAM+XLvlH6vpTXmXPz5+/1rx+VK1pgIWlZWNNXJaJnwikrAQvdKIa2bNr1qqTaYAAAABMDExExqWfJTX0nE7c3Nhmk/ZBlSAAAAAAAAAAAAAAAlSmyZ0sxYpvOoaKxpW6daxWNQ6JAAALeHzTSe3vHyryY4vDb6PrL9NfccTzH1/l6mO8WjcdHOtWazqXr8OamakXpO4lJFaAzZsu+UdPK+lNeZc7qOo7vWvCpa1HRLlXaU6x82rlyfKEU1ICF7pRDWzZteteVSbTAAAAAAAVZcntCUR82n1Gb/ZClJpAAAAAAAAJUpsmdLMWKck6hZfF8fqMWbOXpo1uilJpAAAJUpsmdLMeKbzqGisaVunWkVjUOiTsRvlHViZiPMs1rNpitY3Mt9OCj06n+XzHs07dTPd44ejxfBqfozW/+qfn9P7+f1/6YsmOazqf3u262i0bhwM+C+G80vHn+/KCSp2I2xvSVazadQ1YL+j/fdRkrF4dfo8k9NPrx8/u3VtExuGlasxOpeix5K5K91Z8KMubfKOnldTHrzLQzdVGT1pPj8/wqWNYBC1k61a+TJvxDiXCve/EuMooXulENbNm1615VJtMAAAAAABVlye0JRDUz59etVKTRAAAAAAAASpTZM6WY8c3nUNFY0rdOtYrGodEleXHvnH6lEtTPg7vavKhJogJUpsmdLMWKck6horGle3TrSKxqHRJ2sTM6jmxM6jcpVra9orWNzL0+F4f0Rz5z47Q5+bL3zqOHq/h/w+vT17rebT+32j/35r1LpIZMVbdY2nW9q8KM/TYs8RGSN6eREbdOZ08TWs2nULq10hM7b9McUjUOsLHYtOpjfViYiZ2lF7RE1ifEkGmImYncJxO1cxptUvFoRtZKtVWTJvxCKakAt0I5YyTaa6jlnWuXP3AAAAAAAVZcntCUQ1M+fXrVSk0QAAAAAAAEqU2TOlmLHOSdQ0VjSt060isah0SAAV5ce+cfqUS1M+Du9q8qqU2lM6auLFN500VjSuZdOtYrGodEnaxMzqOrEzERuUq1te0VrG5l6fC8PFI3/wCvHaHPy5Zv4jh6v4f8Pr09e63m8/t9o/qvUukAA8utdOnM7eRx44pGodYWAAAK7ZPhKK/VqZOomJ1ROttsTGl+PJF4dYWAAI3ptmJUZcXd5jlSm0eBkAAAAVZcntCUQ1M+fXrVSk0QAAAAAAAEqU2TOlmPHN51DRWNK3TpSKxqHRIAAB2tdsTOk8eObzqE7Y/j9Ri31X5OniI3RWm1XaxudQxM68yzWs2mK1jcy9LheH9HXnbx2hz8uWbzqOHrPh/w+Onr3W83n9vtH9fq0KXSAAAeY6TyoAACu904hp5s2/WqtJrOxLDNbTWdwurbaExp0MeSLw6wsAARvTbMTpRlxd/mOVKbR4GQABVlye0JRDUz59eteVKTRAAAAAAAASpTZM6WY8c3nUNFa6VunSkVjUOiQAADsQwlWNzELojSt0a1isah0SQtj306/HyzFtctfJ083n0jz9Pq3cLw/o69fHaGllzd86jh6D4f8Pjp47rebz+32j/1oUukAAAA8x0nlQAFeS6cQ082bfrVWk1gAHYlhmtprO4XVttCY06GPJF4dYWAAI3ptmJ0oy4u7zHKlNoz4GRVlye0JRDUz59eteVKTRAAAAAAAASpTZM6WY8c3nUNFY0rl06Uisah0SAAAAAWUuhMNrDm/wBtlsQhM6bkRMzqG3Bh9P34aeTJ3eI4d3pOkjDHdP8Aq/C1U3AAAAAHmOk8qArvdOIaebNv1qrSawAAADsTphmtprO4XVttCY06GPJF4dYWAAI3ptmJ0oy4u7zHLJlya5R+Lohx8+ft9a8qUmgAAAAAAAAlSmyZ0sx45vOoaK10rdOlIpGodEgAAAAAHYjfRiZ15ZrWbTFaxuZenw2D0xz5z47Ofly98+OHr+h6P9CkTfzb8fb+V6lvgAAAAAPMdJ5VXe6cQ082bfrVWk1gAAAAAHYnTDNbTWdwurbaExp0MeSLw6wsAV5Mmkq1anUdRFImIliyW3K+I04GXJ322iKwAAAAAAEqU2TOlmPHN51DRWulcunSkUjUOiQAAAAADtY3OoYmdRuWa1m0xWsbmXpcLw8U5z/Lx2hoZc3f4jh6v4f8Pjp47rebz+32j+stCh0wAAAAAAHjeqdadbTwf6lu3tRZQAAAAAAAAdidMM1tNZ3C6ttoTGnQx3i8bQyX0zWNqc+bsjUMWS+/pdEacHNlnJP2RZUgAAAAAAO0ruSZ0njxze2oaa10rdSlIrGodEgAAAAAHYYIjfiHpcLw3o5z/Lx2aGbN3+I4es+H/D46eO63m8/t9o/rLQodMAAAAAAAB//Z);
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
