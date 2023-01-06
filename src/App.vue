<template>
  <router-view />
</template>

<style lang="scss">
$accent-color: #072D4B;
$text-color: rgba(7, 45, 75, 0.6);
$subtext-color: rgba(7, 45, 75, 0.4);

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');


html,
body {
  font-family: 'Roboto';
  font-size: 1rem;
  color: $text-color;
  box-sizing: border-box;
  background-color: aliceblue;
}

#app {}


.container {
  margin: 0 auto;
  max-width: 36vw;
}


.title {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  color: $accent-color;
}

.text {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: $text-color;
}

.subtext {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: $subtext-color;
}
</style>
