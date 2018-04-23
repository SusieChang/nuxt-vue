<template>
  <div>
    <div class="header">
      <b-navbar toggleable="lg" type="dark" variant="dark" class="top-navbar">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">STAR MOVIE</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <!--导航栏-->
          <b-navbar-nav>
            <b-nav-item-dropdown class="city-name" text="广州" right>
              <b-dropdown-item href="#">定位城市：<span class="city-name">广州</span></b-dropdown-item>
              <b-dropdown-item href="#"><b-list-group class="city-list"></b-list-group></b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">首页</b-nav-item>
            <b-nav-item href="#" disabled>影院</b-nav-item>
            <b-nav-item href="#" disabled>电影</b-nav-item>
            <b-nav-item href="#" disabled>热点</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" type="text" placeholder="Search"/>
              <b-button size="sm" class="my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using button-content slot -->
              <template slot="button-content">
                <img  class="user-portrait rounded-circle" src="../assets/img/1.jpg">
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <!--end of navbar-->
    </div>

    <nuxt/>

    <div class="bottom-footer">
      <div class="footer-content-row" >
        <div class="footer-grid">
          <h4>About Us</h4>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. <span>Excepteur sint occaecat cupidatat non proident
					sunt in culpa qui officia deserunt mollit anim id est laborum.</span></p>
        </div>
        <div class="footer-grid">
          <h4>Contact</h4>
          <ul style="list-style: none">
            <li><span class="fa fa-address-book fa-lg"></span> 738 Diamond Road, New York City</li>
            <li><span class="fa fa-mail-forward fa-lg"></span><a href="mailto:info@example.com">info@example.com</a></li>
            <li><span class="fa fa-phone fa-lg" aria-hidden="true"></span> (0123) 0111 111 222</li>
          </ul>
        </div>
      </div>
      <p class="footer_copy">Copyright &copy; 2018.Company name All rights reserved.<a target="_blank" href="#">STAR MOVIES</a></p>
    </div>

  </div>
</template>
