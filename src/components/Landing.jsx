
import '../index1.css'

const Landing = () => {

  return (
<body>

<section class="smart-scroll">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-dark">
            <a class="navbar-brand heading-black" href="index.html">
                Knight
            </a>
            <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span data-feather="grid"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#features">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#pricing">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#faq">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll" href="#blog">Learn more</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link page-scroll d-flex flex-row align-items-center text-primary" href="#">
                            <em data-feather="layout" width="18" height="18" class="mr-2"></em>
                            ENTER APP
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</section>

<section class="py-7 py-md-0 bg-hero" id="home">
    <div class="container">
        <div class="row vh-md-100">
            <div class="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                <h1 class="heading-black text-capitalize">Quickly build landing pages with Knight</h1>
                <p class="lead py-3">Knight is a platform that helps freelancers and companies build beautiful landing
                    pages in minutes. Sign up for free.</p>
                <button class="btn btn-primary d-inline-flex flex-row align-items-center">
                    ENTER THE APP
                    <em class="ml-2" data-feather="arrow-right"></em>
                </button>
            </div>
        </div>
    </div>
</section>





</body>
  )
}

export default Landing
