<template>
  <div>
    <footer>
      <p>CopyRights 2020</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>

  footer{
    background-color:#eee;
    color:#333;
    padding: 15px
  }

  ul{
    margin: 0;
    padding:0
  }

  .nav-item{
    color:#fff;
    font-size:20px;
    list-style: none
  }

  .nav-item a, .nav-item a:active{
    color:inherit;
    text-decoration: none;
  }

</style>
