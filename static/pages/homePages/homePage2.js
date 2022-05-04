let homePage2 = {
    pageIndex : 0,
    pageName : "homePage2",
    pageText : {
        sequences : 1,
        text : '<div>'+
        '<style>'+
        '    \.row.content {height: 100vh}'+
        '    .sidenav {'+
        '      background-color: #f1f1f1;'+
        '      height: 100%;'+
        '    }'+
        ''+
        '    .full-height{'+
        '      height: 100vh;'+
        '    }'+
        '    footer {'+
        '      background-color: #555;'+
        '      color: white;'+
        '      padding: 15px;'+
        '    }'+
        '    @media screen and (max-width: 767px) {'+
        '      .sidenav {'+
        '        height: auto;'+
        '        padding: 15px;'+
        '      }'+
        '      .row.content {height: auto;} '+
        '    }'+
        '  </style>'+
        ''+
        '<script>'+
        '  function myFunction() {'+
        '    document.getElementById("myDropdown").classList.toggle("show");'+
        '  }'+
        '  function filterFunction() {'+
        '    var input, filter, ul, li, a, i;'+
        '    input = document.getElementById("myInput");'+
        '    filter = input.value.toUpperCase();'+
        '    div = document.getElementById("myDropdown");'+
        '    a = div.getElementsByTagName("a");'+
        '    for (i = 0; i < a.length; i++) {'+
        '      txtValue = a[i].textContent || a[i].innerText;'+
        '      if (txtValue.toUpperCase().indexOf(filter) > -1) {'+
        '        a[i].style.display = "";'+
        '      } else {'+
        '        a[i].style.display = "none";'+
        '      }'+
        '    }'+
        '  }'+
        '</script>'+
        '<div class="container-fluid">'+
        '  <div class="row content full-height">'+
        '    <div class="col-sm-3 sidenav">'+
        '        <div class="row">'+
        '          <div class="col-md-6">'+
        '            <h4>FILTER</h4>'+
        '          </div>'+
        '          <div class="col-md-6">'+
        '            <div class="btn-group" style="float: right; padding-top: 3px;" data-getcoord[0]="4 home-refreshBtn f,bb">'+
        '              <button class="btn btn-mini btn-success btn-generate"><i class="icon-refresh"></i> Refresh</button>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '      <ul class="nav nav-pills nav-stacked">'+
        '        <li>Workshop</li>'+
        '        <li class="dropdown" data-getcoord[0]="0 home-workshopFormFilter f,bb,m,h,k">'+
        '          <button class="dropdown-toggle btn-block" data-toggle="dropdown" href="#">--All Workshop--'+
        '          <span class="caret"></span></button>'+
        '          <ul class="dropdown-menu">'+
        '            <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">'+
        '            <li><a href="#">Workshop 1</a></li>'+
        '            <li><a href="#">Workshop 2</a></li>'+
        '            <li><a href="#">Workshop 3</a></li>'+
        '            <li><a href="#">Workshop 4</a></li>'+
        '          </ul>'+
        '        </li>'+
        '        <li>Nomor Polisi</li>'+
        '        <input type="text" class="form-control" id="usr" data-getcoord[0]="1 home-inputNopolFilter f,bb,m,h,k">'+
        '        <li>Asuransi</li>'+
        '        <li class="dropdown" data-getcoord[0]="2 home-asuransiFormFilter f,bb,m,h,k">'+
        '          <button class="dropdown-toggle btn-block" data-toggle="dropdown" href="#">--All Asuransi--'+
        '          <span class="caret"></span></button>'+
        '          <ul class="dropdown-menu">'+
        '            <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">'+
        '            <li><a href="#">Asuransi 1</a></li>'+
        '            <li><a href="#">Asuransi 2</a></li>'+
        '            <li><a href="#">Asuransi 3</a></li>'+
        '            <li><a href="#">Asuransi 4</a></li>'+
        '          </ul>'+
        '        </li>'+
        '        <li>Ticket Number</li>'+
        '        <input type="text" class="form-control" id="usr" data-getcoord[0]="3 home-inputTicketNumberFilter f,bb,m,h,k">'+
        '      </ul><br>'+
        '    </div>'+
        ''+
        '    <div class="col-sm-9 full-height">'+
        '      <div class="portlet light bordered bengkel">'+
        '      <div class="portlet-title">'+
        '        <div class="caption font-red-sunglo">'+
        '          <i class="icon-settings font-red-sunglo"></i>'+
        '          <span class="caption-subject bold uppercase"> Bengkel</span>'+
        '        </div>'+
        '      </div>'+
        '      <div class="row widget-row">'+
        '        <div class="col-md-3">'+
        '          <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
        '            <div class="widget-thumb-wrap">'+
        '              <h4 class="widget-thumb-heading">PREDEPLOYED</h4>'+
        '              <div class="widget-thumb-icon bg-green-meadow dashboard" onclick="nextDisplayedPage(1)" data-getcoord[0]="5 home-predeployedWidget f,bb,r">'+
        '                <span class="fa fa-external-link-square"></span>'+
        '                <span class="placeholder_text">Detail Click Here</span>'+
        '              </div>'+
        '              <div class="widget-thumb-body">'+
        '                <div class="widget-thumb-body-stat">0<div class="widget-thumb-title">SPK</div></div>'+
        '                <div class="widget-thumb-subtitle">SPK are ready to be deployed to workshop</div>'+
        '              </div>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="col-md-3">'+
        '          <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
        '            <div class="widget-thumb-wrap">'+
        '              <h4 class="widget-thumb-heading">DEPLOYED</h4>'+
        '              <div class="widget-thumb-icon bg-yellow-crusta dashboard">'+
        '                <span class="fa fa-sign-in"></span>'+
        '                <span class="placeholder_text">Detail Click Here</span>'+
        '              </div>'+
        '              <div class="widget-thumb-body">'+
        '                <div class="widget-thumb-body-stat">0<div class="widget-thumb-title">SPK</div></div>'+
        '                <div class="widget-thumb-subtitle">SPK are already deployed to workshop</div>'+
        '              </div>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="col-md-3">'+
        '          <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
        '            <div class="widget-thumb-wrap">'+
        '              <h4 class="widget-thumb-heading">ACCEPTED</h4>'+
        '              <div class="widget-thumb-icon bg-yellow-crusta dashboard">'+
        '                <span class="fa fa-check-square"></span>'+
        '                <span class="placeholder_text">Detail Click Here</span>'+
        '              </div>'+
        '              <div class="widget-thumb-body">'+
        '                <div class="widget-thumb-body-stat">0<div class="widget-thumb-title">SPK</div></div>'+
        '                <div class="widget-thumb-subtitle">SPK that are accepted by workshop</div>'+
        '              </div>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="col-md-3">'+
        '          <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
        '            <div class="widget-thumb-wrap">'+
        '              <h4 class="widget-thumb-heading">PICKUP</h4>'+
        '              <div class="widget-thumb-icon bg-yellow-crusta dashboard">'+
        '                <span class="fa fa-truck"></span>'+
        '                <span class="placeholder_text">Detail Click Here</span>'+
        '              </div>'+
        '              <div class="widget-thumb-body">'+
        '                <div class="widget-thumb-body-stat">0<div class="widget-thumb-title">SPK</div></div>'+
        '                <div class="widget-thumb-subtitle">SPK that unit is being picked up</div>'+
        '              </div>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '      <div class="row widget-row">'+
        '        <div class="col-md-3">'+
        '          <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
        '            <div class="widget-thumb-wrap">'+
        '              <h4 class="widget-thumb-heading">UNIT IN</h4>'+
        '              <div class="widget-thumb-icon bg-yellow-crusta dashboard">'+
        '                <span class="fa fa-home"></span>'+
        '                <span class="placeholder_text">Detail Click Here</span>'+
        '              </div>'+
        '              <div class="widget-thumb-body">'+
        '                <div class="widget-thumb-body-stat">0<div class="widget-thumb-title">SPK</div></div>'+
        '                <div class="widget-thumb-subtitle">SPK that unit is already in workshop</div>'+
        '              </div>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="col-md-3">'+
        '          <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
        '            <div class="widget-thumb-wrap">'+
        '              <h4 class="widget-thumb-heading">WORK IN PROGRESS</h4>'+
        '              <div class="widget-thumb-icon bg-yellow-crusta dashboard">'+
        '                <span class="fa fa-cogs"></span>'+
        '                <span class="placeholder_text">Detail Click Here</span>'+
        '              </div>'+
        '              <div class="widget-thumb-body">'+
        '                <div class="widget-thumb-body-stat">0<div class="widget-thumb-title">SPK</div></div>'+
        '                <div class="widget-thumb-subtitle">SPK that the unit is being repaired in workshop</div>'+
        '              </div>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="col-md-3">'+
        '          <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
        '            <div class="widget-thumb-wrap">'+
        '              <h4 class="widget-thumb-heading">DELIVERED</h4>'+
        '              <div class="widget-thumb-icon bg-green-jungle dashboard">'+
        '                <span class="fa fa-smile-o"></span>'+
        '                <span class="placeholder_text">Detail Click Here</span>'+
        '              </div>'+
        '              <div class="widget-thumb-body">'+
        '                <div class="widget-thumb-body-stat">0<div class="widget-thumb-title">SPK</div></div>'+
        '                <div class="widget-thumb-subtitle">Total SPK that are completed until now</div>'+
        '              </div>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="col-md-3">'+
        '          <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
        '            <div class="widget-thumb-wrap">'+
        '              <h4 class="widget-thumb-heading">REJECTED</h4>'+
        '              <div class="widget-thumb-icon bg-red dashboard">'+
        '                <span class="fa fa-exclamation-circle"></span>'+
        '                <span class="placeholder_text">Detail Click Here</span>'+
        '              </div>'+
        '              <div class="widget-thumb-body">'+
        '                <div class="widget-thumb-body-stat">0<div class="widget-thumb-title">SPK</div></div>'+
        '                <div class="widget-thumb-subtitle">SPK that are rejected by workshop</div>'+
        '              </div>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '      <div class="row widget-row">'+
        '        <div class="col-md-3">'+
        '          <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
        '            <div class="widget-thumb-wrap">'+
        '              <h4 class="widget-thumb-heading">CANCELLED</h4>'+
        '              <div class="widget-thumb-icon bg-red dashboard">'+
        '                <span class="fa fa-times-circle-o"></span>'+
        '                <span class="placeholder_text">Detail Click Here</span>'+
        '              </div>'+
        '              <div class="widget-thumb-body">'+
        '                <div class="widget-thumb-body-stat">0<div class="widget-thumb-title">SPK</div></div>'+
        '                <div class="widget-thumb-subtitle">SPK that are cancelled by Insurance</div>'+
        '              </div>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="col-md-3">'+
        '          <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
        '            <div class="widget-thumb-wrap">'+
        '              <h4 class="widget-thumb-heading">INDENT</h4>'+
        '              <div class="widget-thumb-icon bg-red dashboard">'+
        '                <span class="fa fa-times-circle-o"></span>'+
        '                <span class="placeholder_text">Detail Click Here</span>'+
        '              </div>'+
        '              <div class="widget-thumb-body">'+
        '                <div class="widget-thumb-body-stat">0<div class="widget-thumb-title">SPK</div></div>'+
        '                <div class="widget-thumb-subtitle">SPK that are indent by Supplier Parts</div>'+
        '              </div>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="col-md-3">'+
        '          <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
        '            <div class="widget-thumb-wrap">'+
        '              <h4 class="widget-thumb-heading">TERMINATED</h4>'+
        '              <div class="widget-thumb-icon bg-dark dashboard">'+
        '                <span class="fa fa-minus-square"></span>'+
        '                <span class="placeholder_text">Detail Click Here</span>'+
        '              </div>'+
        '              <div class="widget-thumb-body">'+
        '                <div class="widget-thumb-body-stat">0<div class="widget-thumb-title">SPK</div></div>'+
        '                <div class="widget-thumb-subtitle">SPK that are terminated for good</div>'+
        '              </div>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="col-md-3">'+
        '          <div class="widget-thumb widget-bg-color-white text-uppercase margin-bottom-20 bordered">'+
        '            <div class="widget-thumb-wrap">'+
        '              <h4 class="widget-thumb-heading">TLA</h4>'+
        '              <div class="widget-thumb-icon bg-dark dashboard">'+
        '                <span class="fa fa-ban"></span>'+
        '                <span class="placeholder_text">Detail Click Here</span>'+
        '              </div>'+
        '              <div class="widget-thumb-body">'+
        '                <div class="widget-thumb-body-stat">0<div class="widget-thumb-title">SPK</div></div>'+
        '                <div class="widget-thumb-subtitle">SPK that unit is considered as Total Loss Accident</div>'+
        '              </div>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '      </div>'+
        '    </div>'+
        '    </div>'+
        '  </div>'+
        ''+
        '  <div class="footer navbar-fixed-bottom" style="background-color: #364150;">'+
        '    <div class="navbar-header">'+
        '        <div class="page-logo">'+
        '            <a>'+
        '                <img style="width:120px;height:35px;padding-top:15px ;" src="https://primasis.net/BengkelNet_Insurance/assets/img/Logo.jpg" alt="logo" class="logo-default"> '+
        '            </a>'+
        '        </div>'+
        '    </div>'+
        '    <ul class="nav navbar-nav">'+
        '      <li class="dropup">'+
        '        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Home'+
        '        <span class="caret"></span></a>'+
        '        <ul class="dropdown-menu">'+
        '          <li><a href="#">Dashboard Bengkel</a></li>'+
        '        </ul>'+
        '      </li>'+
        '      <li class="dropup">'+
        '        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Manajemen'+
        '        <span class="caret"></span></a>'+
        '        <ul class="dropdown-menu">'+
        '          <li><a href="#">SPK</a></li>'+
        '        </ul>'+
        '      </li>'+
        '      <li class="dropup">'+
        '        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Upload'+
        '        <span class="caret"></span></a>'+
        '        <ul class="dropdown-menu">'+
        '          <li><a href="#">Sparepart</a></li>'+
        '        </ul>'+
        '      </li>'+
        '      <li class="dropup">'+
        '        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Monitoring'+
        '        <span class="caret"></span></a>'+
        '        <ul class="dropdown-menu">'+
        '          <li><a href="#">Workshop AG</a></li>'+
        '          <li><a href="#">Operator Performance</a></li>'+
        '          <li><a href="#">E Invoice</a></li>'+
        '        </ul>'+
        '      </li>'+
        '      <li class="dropup">'+
        '        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Master Data'+
        '        <span class="caret"></span></a>'+
        '        <ul class="dropdown-menu">'+
        '          <li><a href="#">Page 1-1</a></li>'+
        '          <li><a href="#">Page 1-2</a></li>'+
        '          <li><a href="#">Page 1-3</a></li>'+
        '        </ul>'+
        '      </li>'+
        '    </ul>'+
        '  </div>'+
        '</div>'+
        '</div>'
    },
    pageCoord : [],
    pageTime : 0
}