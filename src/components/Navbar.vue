<script>
export default {
  name: "Navbar",
  components:{}
}
</script>

<template>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand"  href="/logo"><img src="../assets/navbarquran.png" class="rounded-circle" width="30" height="30"  ></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Router-link class="nav-link text-black active" aria-current="page" to="/"><div class="txt">Quran</div></Router-link>
              </li>
              <li class="nav-item">
                <Router-link class="nav-link text-black active" aria-current="page" to="/random"><div class="txt">Random Ayat</div></Router-link>
              </li>

              <li class="nav-item">
                <Router-link class="nav-link text-black active" aria-current="page" to="/mushaf"><div class="txt">Mushaf</div></Router-link>
              </li>
              <li class="nav-item">
                <Router-link class="nav-link text-black active" aria-current="page" to="/aboutme"><div class="txt">About</div></Router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </template>
<style>
.navbar{
  background: aqua;
}
</style>

