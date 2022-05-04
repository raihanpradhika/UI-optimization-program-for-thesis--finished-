let homePage3 = {
    pageIndex : 0,
    pageName : "homePage3",
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
        '<div class="header navbar" style="background-color: #364150;">'+
        '    <div class="navbar-header">'+
        '        <div class="page-logo">'+
        '            <a>'+
        '                <img style="width:120px;height:35px;padding-top:15px ;" src="https://primasis.net/BengkelNet_Insurance/assets/img/Logo.jpg" alt="logo" class="logo-default"> '+
        '            </a>'+
        '        </div>'+
        '    </div>'+
        '    <ul class="nav navbar-nav">'+
        '      <li class="dropdown">'+
        '        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Home'+
        '        <span class="caret"></span></a>'+
        '        <ul class="dropdown-menu">'+
        '          <li><a href="#">Dashboard Bengkel</a></li>'+
        '        </ul>'+
        '      </li>'+
        '      <li class="dropdown">'+
        '        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Manajemen'+
        '        <span class="caret"></span></a>'+
        '        <ul class="dropdown-menu">'+
        '          <li><a href="#">SPK</a></li>'+
        '        </ul>'+
        '      </li>'+
        '      <li class="dropdown">'+
        '        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Upload'+
        '        <span class="caret"></span></a>'+
        '        <ul class="dropdown-menu">'+
        '          <li><a href="#">Sparepart</a></li>'+
        '        </ul>'+
        '      </li>'+
        '      <li class="dropdown">'+
        '        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Monitoring'+
        '        <span class="caret"></span></a>'+
        '        <ul class="dropdown-menu">'+
        '          <li><a href="#">Workshop AG</a></li>'+
        '          <li><a href="#">Operator Performance</a></li>'+
        '          <li><a href="#">E Invoice</a></li>'+
        '        </ul>'+
        '      </li>'+
        '      <li class="dropdown">'+
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
        '    <div class="col-sm-9 full-height">'+
        '      <div class="portlet light bordered bengkel">'+
        '      <div class="portlet-title">'+
        '        <div class="caption font-red-sunglo">'+
        '          <i class="icon-settings font-red-sunglo"></i>'+
        '          <span class="caption-subject bold uppercase"> Bengkel</span>'+
        '        </div>'+
        '      </div>'+
        '      <table class="table table-striped table-bordered table-hover dataTable no-footer" id="datatable_ajax" aria-describedby="datatable_ajax_info" role="grid">'+
        '        <thead>'+
        '            <tr role="row" class="heading">'+
        '                <th width="5px" class="text-center" rowspan="1" colspan="1" aria-label="#">#</th>'+
        '                <th width="50px" class="text-center text-left" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1">Status</th>'+
        '                <th width="5px" class="text-center text-left" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1">SPK</th>'+
        '                <th width="130px" class="text-center text-left" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1">Description</th>'+
        '                <th width="80px" class="text-center text-left" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1">Action</th>'+
        '            </tr>'+
        '        </thead>'+
        '        <tbody>'+
        '            <tr role="row" class="odd">'+
        '                <td class=" text-center">1.</td>'+
        '                <td class=" text-left">'+
        '                    <span class="badge bg-green-meadow bg-font-green-meadow badge-roundless"> PREDEPLOYED </span>'+
        '                </td>'+
        '                <td class=" text-center">0</td>'+
        '                <td class=" text-left">SPK are ready to be deployed to workshop</td>'+
        '                <td class=" text-center">'+
        '                  <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;" onclick="nextDisplayedPage(1)" data-getcoord[0]="5 home-predeployedWidget f,bb,r"> SELECT'+
        '                  </button>'+
        '                </td>'+
        '            </tr>'+
        '            <tr role="row" class="even">'+
        '                <td class=" text-center">2.</td>'+
        '                <td class=" text-left">'+
        '                    <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> DEPLOYED </span>'+
        '                </td>'+
        '                <td class=" text-center">0</td>'+
        '                <td class=" text-left">SPK are already deployed to workshop</td>'+
        '                <td class=" text-center">'+
        '                  <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SELECT'+
        '                  </button>'+
        '                </td>'+
        '            </tr>'+
        '            <tr role="row" class="odd">'+
        '                <td class=" text-center">3.</td>'+
        '                <td class=" text-left">'+
        '                    <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> ACCEPTED </span>'+
        '                </td>'+
        '                <td class=" text-center">0</td>'+
        '                <td class=" text-left">SPK that are accepted by workshop</td>'+
        '                <td class=" text-center">'+
        '                  <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SELECT'+
        '                  </button>'+
        '                </td>'+
        '            </tr>'+
        '            <tr role="row" class="even">'+
        '                <td class=" text-center">4.</td>'+
        '                <td class=" text-left">'+
        '                    <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> PICKUP </span>'+
        '                </td>'+
        '                <td class=" text-center">0</td>'+
        '                <td class=" text-left">SPK that unit is being picked up</td>'+
        '                <td class=" text-center">'+
        '                  <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SELECT'+
        '                  </button>'+
        '                </td>'+
        '            </tr>'+
        '            <tr role="row" class="odd">'+
        '                <td class=" text-center">5.</td>'+
        '                <td class=" text-left">'+
        '                    <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> UNIT IN </span>'+
        '                </td>'+
        '                <td class=" text-center">0</td>'+
        '                <td class=" text-left">SPK that unit is already in workshop</td>'+
        '                <td class=" text-center">'+
        '                  <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SELECT'+
        '                  </button>'+
        '                </td>'+
        '            </tr>'+
        '            <tr role="row" class="even">'+
        '                <td class=" text-center">6.</td>'+
        '                <td class=" text-left">'+
        '                    <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> WORK IN PROGRESS </span>'+
        '                </td>'+
        '                <td class=" text-center">0</td>'+
        '                <td class=" text-left">SPK that the unit is being repaired in workshop</td>'+
        '                <td class=" text-center">'+
        '                  <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SELECT'+
        '                  </button>'+
        '                </td>'+
        '            </tr>'+
        '            <tr role="row" class="odd">'+
        '                <td class=" text-center">7.</td>'+
        '                <td class=" text-left">'+
        '                    <span class="badge bg-bg-green-jungle bg-font-bg-green-jungle badge-roundless"> DELIVERED </span>'+
        '                </td>'+
        '                <td class=" text-center">0</td>'+
        '                <td class=" text-left">Total SPK that are completed until now</td>'+
        '                <td class=" text-center">'+
        '                  <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SELECT'+
        '                  </button>'+
        '                </td>'+
        '            </tr>'+
        '            <tr role="row" class="even">'+
        '                <td class=" text-center">8.</td>'+
        '                <td class=" text-left">'+
        '                    <span class="badge bg-red bg-font-red badge-roundless"> REJECTED </span>'+
        '                </td>'+
        '                <td class=" text-center">0</td>'+
        '                <td class=" text-left">SPK that are rejected by workshop</td>'+
        '                <td class=" text-center">'+
        '                  <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SELECT'+
        '                  </button>'+
        '                </td>'+
        '            </tr>'+
        '            <tr role="row" class="odd">'+
        '                <td class=" text-center">9.</td>'+
        '                <td class=" text-left">'+
        '                    <span class="badge bg-red bg-font-red badge-roundless"> CANCELLED </span>'+
        '                </td>'+
        '                <td class=" text-center">0</td>'+
        '                <td class=" text-left">SPK that are cancelled by Insurance</td>'+
        '                <td class=" text-center">'+
        '                  <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SELECT'+
        '                  </button>'+
        '                </td>'+
        '            </tr>'+
        '            <tr role="row" class="even">'+
        '                <td class=" text-center">10.</td>'+
        '                <td class=" text-left">'+
        '                    <span class="badge bg-red bg-font-red badge-roundless"> INDENT </span>'+
        '                </td>'+
        '                <td class=" text-center">0</td>'+
        '                <td class=" text-left">SPK that are indent by Supplier Parts</td>'+
        '                <td class=" text-center">'+
        '                  <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SELECT'+
        '                  </button>'+
        '                </td>'+
        '            </tr>'+
        '            <tr role="row" class="odd">'+
        '                <td class=" text-center">11.</td>'+
        '                <td class=" text-left">'+
        '                    <span class="badge bg-dark bg-font-dark badge-roundless"> TERMINATED </span>'+
        '                </td>'+
        '                <td class=" text-center">0</td>'+
        '                <td class=" text-left">SPK that are terminated for good</td>'+
        '                <td class=" text-center">'+
        '                  <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SELECT'+
        '                  </button>'+
        '                </td>'+
        '            </tr>'+
        '            <tr role="row" class="even">'+
        '                <td class=" text-center">12.</td>'+
        '                <td class=" text-left">'+
        '                    <span class="badge bg-dark bg-font-dark badge-roundless"> TLA </span>'+
        '                </td>'+
        '                <td class=" text-center">0</td>'+
        '                <td class=" text-left">SPK that unit is considered as Total Loss Accident</td>'+
        '                <td class=" text-center">'+
        '                  <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SELECT'+
        '                  </button>'+
        '                </td>'+
        '            </tr>'+
        '        </tbody>'+
        '    </table>      '+
        '    </div>'+
        '    </div>'+
        '  </div>'+
        '</div>'+
        '</div>'
    },
    pageCoord : [],
    pageTime : 0
}