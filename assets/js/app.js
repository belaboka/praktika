window.digitxPage = function (pageKey) {
  const pageMap = {
    home: {
      title: "DigitX - Home",
      desktop: "assets/screens/home-desktop.jpg",
      laptop: "assets/screens/home-laptop.jpg",
      mobile: "assets/screens/home-mobile.jpg"
    },
    services: {
      title: "DigitX - Services",
      desktop: "assets/screens/services-desktop.jpg",
      laptop: "assets/screens/services-laptop.jpg",
      mobile: "assets/screens/services-mobile.jpg"
    },
    projects: {
      title: "DigitX - Projects",
      desktop: "assets/screens/projects-desktop.jpg",
      laptop: "assets/screens/projects-laptop.jpg",
      mobile: "assets/screens/projects-mobile.jpg"
    },
    about: {
      title: "DigitX - About",
      desktop: "assets/screens/about-desktop.jpg",
      laptop: "assets/screens/about-laptop.jpg",
      mobile: "assets/screens/about-mobile.jpg"
    },
    careers: {
      title: "DigitX - Careers",
      desktop: "assets/screens/careers-desktop.jpg",
      laptop: "assets/screens/careers-laptop.jpg",
      mobile: "assets/screens/careers-mobile.jpg"
    },
    blogs: {
      title: "DigitX - Blogs",
      desktop: "assets/screens/blogs-desktop.jpg",
      laptop: "assets/screens/blogs-laptop.jpg",
      mobile: "assets/screens/blogs-mobile.jpg"
    },
    contact: {
      title: "DigitX - Contact",
      desktop: "assets/screens/contact-desktop.jpg",
      laptop: "assets/screens/contact-laptop.jpg",
      mobile: "assets/screens/contact-mobile.jpg"
    }
  };

  return {
    pageKey: pageKey,
    pageTitle: pageMap[pageKey] ? pageMap[pageKey].title : "DigitX",
    images: pageMap[pageKey] || pageMap.home,
    menuOpen: false,
    screenMode: "desktop",
    init: function () {
      document.title = this.pageTitle;
      this.setScreenMode();
      window.addEventListener("resize", this.setScreenMode.bind(this));
    },
    setScreenMode: function () {
      const width = window.innerWidth;
      if (width < 768) {
        this.screenMode = "mobile";
      } else if (width < 1400) {
        this.screenMode = "laptop";
      } else {
        this.screenMode = "desktop";
      }

      if (width >= 768) {
        this.menuOpen = false;
      }
    },
    openMenu: function () {
      this.menuOpen = true;
    },
    closeMenu: function () {
      this.menuOpen = false;
    },
    isActive: function (key) {
      return this.pageKey === key;
    },
    get currentImage() {
      return this.images[this.screenMode];
    }
  };
};
