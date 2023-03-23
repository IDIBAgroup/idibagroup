<?php 
function nav_item (string $lien, string $titre): string
{
    $classe = 'nav-item';
    if ($_SERVER['SCRIPT_NAME'] === $lien) {
       $classe .= 'active';
    }
    return '<li class="' . $classe . '">
    <a class="nav-link" href="' . $lien . '">' . $titre . '</a>
    </li>';
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Metas -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta name="keywords" content="Idiba Group" />
  <meta name="description" content="Idiba Group" />
  <meta name="author" content="Idiba Group" />

  <!-- Title  -->
  <title>
    <?php if (isset($title)): ?>
        <?= $title ?>
    <?php else: ?>
        Idiba Group  
    <?php endif ?>
    </title>

  <!-- Favicon -->
  <link rel="shortcut icon" href="assets/img/logo symbole idiba group.svg" class="favicon" />

  <link rel="stylesheet" href="assets/css/plugins.css">
  <link rel="stylesheet" href="assets/vendor/build/css/intlTelInput.css">
  <link rel="stylesheet" href="assets/css/style.css" />
</head>

  <!-- <div id="preloader"></div> -->

  <div class="progress-wrap cursor-pointer">

  <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>

  <div class="mouse-cursor cursor-outer"></div>
  <div class="mouse-cursor cursor-inner"></div>

  <header class="main-header">
    <div class="auto-container">
      <div class="header-lower">
        <div class="outer-box">
          <div class="logo-box" id="#">
            <figure class="logo">
              <a href="#"><img src="assets/img/IDIBA GROUP LOGO SITE.svg" alt=""></a>
            </figure>
          </div>
          <div class="menu-area">
            <div class="mobile-nav-toggler">
              <i class="icon-bar"></i>
              <i class="icon-bar"></i>
              <i class="icon-bar"></i>
            </div>
            <nav class="main-menu navbar-expand-md navbar-light">
              <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                <ul class="navigation clearfix" style="padding: 0;">
                <?= nav_item('/index.php', 'Acceuil'); ?>
                <?= nav_item('/about.php', 'A propos'); ?>
                <?= nav_item('/service.php', 'Service'); ?>
                <?= nav_item('/realisation.php', 'Nos réalisations'); ?>
                <?= nav_item('/blog.php', 'Blog'); ?>
                <?= nav_item('/contact.php', 'Contact'); ?>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="sticky-header">
      <div class="auto-container">
        <div class="outer-box">
          <div class="menu-area">
            <div class="logo-box">
              <figure class="logo">
                <a href="index.html"><img src="assets/img/IDIBA GROUP LOGO SITE.svg" alt=""></a>
              </figure>
            </div>
            <nav class="main-menu clearfix">

            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="mobile-menu">
    <div class="menu-backdrop"></div>
    <div class="close-btn">
      <i class="fas fa-times"></i>
    </div>

    <nav class="menu-box">
      <div class="nav-logo">
        <a href="index.html"><img src="assets/img/IDIBA GROUP LOGO SITE.svg" alt="" title=""></a>
      </div>
      <div class="menu-outer">
        <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
      </div>
      <div class="contact-info">
        <h4>Contact Info</h4>
        <ul>
          <li>Douala, Cameroun</li>
          <li><a href="tel:+04 234 7713">(00237) 654 882 925 / 698 062 746</a></li>
          <li><a href="info@odimayoipms.com">idibagroup2020@gmail.com</a></li>
        </ul>
      </div>
      <div class="social-links">
        <ul class="clearfix">
          <li><a href="index.html"><span class="fab fa-facebook-square"></span></a></li>
          <li><a href="index.html"><span class="fab fa-twitter"></span></a></li>
          <li><a href="index.html"><span class="fab fa-instagram"></span></a></li>
        </ul>
      </div>
    </nav>
  </div>
  <body>