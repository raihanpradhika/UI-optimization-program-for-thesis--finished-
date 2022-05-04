let predeployedPage3 = {
    pageIndex : 1,
    pageName : "predeployedPage3",
    pageText : {
        sequences : 1,
        text : '<div>'+
        '<style>'+
        '    /* Set height of the grid so .sidenav can be 100% (adjust if needed) */'+
        '    \.row.content {height: 100vh}'+
        '    '+
        '    /* Set gray background color and 100% height */'+
        '    .sidenav {'+
        '      background-color: #f1f1f1;'+
        '      height: 100%;'+
        '    }'+
        '    .full-height{'+
        '      height: 100vh;'+
        '    }'+
        '    /* Set black background color, white text and some padding */'+
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
        '  /* When the user clicks on the button,'+
        '  toggle between hiding and showing the dropdown content */'+
        '  function myFunction() {'+
        '    document.getElementById("myDropdown").classList.toggle("show");'+
        '  }'+
        ''+
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
        ''+
        ''+
        '<div class="container-fluid">'+
        '    <div class="header navbar" style="background-color: #364150;">'+
        '    <div class="navbar-header">'+
        '        <div class="page-logo">'+
        '            <a onclick="nextDisplayedPage(0)">'+
        '                <img style="width:120px;height:35px;padding-top:15px ;" src="https://primasis.net/BengkelNet_Insurance/assets/img/Logo.jpg" alt="logo" class="logo-default"> '+
        '            </a>'+
        '        </div>'+
        '    </div>'+
        '    <ul class="nav navbar-nav">'+
        '      <li class="dropdown">'+
        '        <a class="dropdown-toggle" data-toggle="dropdown" onclick="nextDisplayedPage(0)">Home'+
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
        '    <div class="caption font-white">'+
        '        <h4 class="caption-subject bold uppercase" style="background-color: #60aee4;"> Manajemen SPK</h4>'+
        '    </div>'+
        '  <div class="row content full-height">'+
        '    <div class="col-md-3 sidenav" style="overflow-y: auto;">'+
        '      '+
        '        <div class="row">'+
        '          <div class="col-md-6">'+
        '            <h4>FILTER</h4>'+
        '          </div>'+
        '          <div class="col-md-6">'+
        '            <div class="btn-group" style="float: right; padding-top: 7px;" data-get1coord="15 predeployed-eksportBtn f,bb">'+
        '                <a class="btn btn-sm green dropdown-toggle" href="javascript:;" data-toggle="dropdown"> Eksport'+
        '                    <i class="fa fa-angle-down"></i>'+
        '                </a>'+
        '                <ul class="dropdown-menu pull-right">'+
        '                    <li>'+
        '                        <a class="btn-eksport">'+
        '                            <i class="fa fa-file-excel-o"></i> to Excel </a>'+
        '                    </li>'+
        '                    <li>'+
        '                        <a class="btn-eksport">'+
        '                            <i class="fa fa-file"></i> to Csv </a>'+
        '                    </li>'+
        '                </ul>'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '      '+
        '      <ul class="nav nav-pills nav-stacked">'+
        '        <li>Asuransi</li>'+
        '        <li class="dropdown" data-getcoord[0]="0 predeployed-selectAsuransi f,bb,m,h,k*10">'+
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
        '        <li>Workshop</li>'+
        '        <li class="dropdown" data-getcoord[0]="1 predeployed-inputWorkshop f,bb,m,h,k*10">'+
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
        '        <li>Ticket No</li>'+
        '        <input type="text" class="form-control" id="usr" data-getcoord[0]="2 predeployed-inputTicketNo f,bb,m,h,k">'+
        '        <li>Reporter Name</li>'+
        '        <input type="text" class="form-control" id="usr" data-getcoord[0]="3 predeployed-inputReporterName f,bb,m,h,k">'+
        '        <li>Car Police No</li>'+
        '        <input type="text" class="form-control" id="usr" data-getcoord[0]="4 predeployed-inputCarPoliceNo f,bb,m,h,k">'+
        '        <li>Status Date</li>'+
        '        <li class="dropdown" data-getcoord[0]="5 predeployed-inputStatusDate f,bb,m,h,k*8">'+
        '          <button class="dropdown-toggle btn-block" href="#">Select'+
        '          <span class="caret"></span></button>'+
        '        </li>'+
        '        <li>From</li>'+
        '        <li>'+
        '        <div class="col-md-2">'+
        '            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">'+
        '                 <input type="checkbox" class="span0_5" id="checked_spkdate_start" name="checked_spkdate_start">'+
        '                 <span data-getcoord[0]="6 predeployed-checkFrom f,bb"></span>'+
        '             </label>'+
        '        </div>'+
        '        <div class="col-md-10">'+
        '            <div class="input-group date date-picker" data-date-format="dd-mm-yyyy" data-getcoord[0]="7 predeployed-selectFrom f,bb,m,h,k">'+
        '                <input type="text" name="start_spkdate" id="start_spkdate" class="form-control" value="01-01-2021" readonly="">'+
        '                <span class="input-group-btn">'+
        '                    <button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
        '                </span>'+
        '            </div>'+
        '        </div>'+
        '        </li>'+
        '        <li>To</li>'+
        '        <li>'+
        '        <div class="col-md-2">'+
        '            <label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">'+
        '                 <input type="checkbox" class="span0_5" id="checked_spkdate_end" name="checked_spkdate_end">'+
        '                 <span data-getcoord[0]="8 predeployed-checkTo f,bb"></span>'+
        '             </label>'+
        '        </div>'+
        '        <div class="col-md-10">'+
        '            <div class="input-group date date-picker" data-date-format="dd-mm-yyyy" data-date-end-date="+0d" data-getcoord[0]="9 predeployed-selectTo f,bb,m,h,k">'+
        '                <input type="text" name="end_spkdate" id="end_spkdate" class="form-control" value="01-01-2021" readonly="">'+
        '                <span class="input-group-btn">'+
        '                    <button class="btn default" type="button"><i class="fa fa-calendar"></i></button>'+
        '                </span>'+
        '            </div>'+
        '        </div>'+
        '        </li>'+
        '        <li>Last User Deploy</li>'+
        '        <input type="text" class="form-control" id="usr" data-getcoord[0]="10 predeployed-inputLastUserDeploy f,bb,m,h,k">'+
        '        <li>Policy No</li>'+
        '        <input type="text" class="form-control" id="usr" data-getcoord[0]="11 predeployed-inputPolicyNo f,bb,m,h,k">'+
        '        <li>Claim No</li>'+
        '        <input type="text" class="form-control" id="usr" data-getcoord[0]="12 predeployed-inputClaimNo f,bb,m,h,k">'+
        '        <li>SPK Status</li>'+
        '        <input type="text" class="form-control" id="usr" data-getcoord[0]="13 predeployed-inputSPKStatus f,bb,m,h,k">'+
        '        <li>Document</li>'+
        '        <li class="dropdown" data-getcoord[0]="14 predeployed-inputDocument f,bb,m,h,k">'+
        '          <button class="dropdown-toggle btn-block" href="#">Select'+
        '          <span class="caret"></span></button>'+
        '        </li>'+
        '    </ul>'+
        '    <div class="row">'+
        '        <div class="col-md-6"></div>'+
        '        <div class="col-md-6">'+
        '            <a class="btn btn-sm green" style="float:right;" data-getcoord[0]="15 predeployed-filterSubmit f,bb">Submit</a>'+
        '        </div>'+
        '    </div>'+
        '    <br><br><br><br><br>'+
        '    </div>'+
        ''+
        '    <div class="col-md-9 full-height" style="overflow-y: auto;">'+
        '      <div class="col-md-12" style="padding-bottom: 50px;">'+
        '        <div id="datatable_ajax_wrapper" class="dataTables_wrapper dataTables_extended_wrapper no-footer">'+
        '            <div class="row">'+
        '                <div class="col-md-8 col-sm-12">'+
        '                    <div class="dataTables_paginate paging_bootstrap_extended" id="datatable_ajax_paginate">'+
        '                        <div class="pagination-panel"> Page '+
        '                            <a href="#" class="btn btn-sm default prev disabled">'+
        '                                <i class="fa fa-angle-left"></i>'+
        '                            </a>'+
        '                            <input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;">'+
        '                            <a href="#" class="btn btn-sm default next">'+
        '                                <i class="fa fa-angle-right"></i>'+
        '                            </a> of '+
        '                            <span class="pagination-panel-total">2032</span>'+
        '                        </div>'+
        '                    </div>'+
        '                    <div class="dataTables_length" id="datatable_ajax_length">'+
        '                        <label>'+
        '                            <span class="seperator">|</span>View '+
        '                            <select name="datatable_ajax_length" aria-controls="datatable_ajax" class="form-control input-xs input-sm input-inline">'+
        '                                <option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option>'+
        '                            </select> records'+
        '                        </label>'+
        '                    </div>'+
        '                    <div class="dataTables_info" id="datatable_ajax_info" role="status" aria-live="polite">'+
        '                        <span class="seperator">|</span>Found total 20,317 records'+
        '                    </div>'+
        '                </div>'+
        '                <div class="col-md-4 col-sm-12">'+
        '                    <div class="table-group-actions pull-right"></div>'+
        '                </div>'+
        '                <div id="datatable_ajax_processing" class="dataTables_processing" style="display: none;">Processing...</div>'+
        '            </div><br>'+
        '            <div class="horizontal-card" style="position: relative;display: -webkit-inline-box;border: 1px solid gray;">'+
        '                <div class="bg-grey-steel" style="width: 130px; height: 130px; text-align: center;">'+
        '                    <p>PT xxxxxxxxxx</p>'+
        '                </div>'+
        '                <div class="row" style="display: inline-block;flex-direction: column;">'+
        '                    <div class="col-md-12">'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">No. Tiket</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">No. Plat</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">No. Policy</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">No. Claim</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">SPK Date</div>'+
        '                        </div>'+
        '                    </div>'+
        '                    <div class="col-md-12">'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                    </div>'+
        ''+
        '                    <div class="col-md-12">'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">Reporter Name</div>'+
        '                        </div>'+
        '                        '+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">Surveyor Name</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">User Deploy</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">SPR</div>'+
        '                        </div>'+
        '                    </div>'+
        '                    <div class="col-md-12">'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                    </div>'+
        '                </div>'+
        '                <div class="horizontal-card-footer" style="position: absolute; left: 0px; right: 0px; bottom: 0px; height: auto; display: flex; align-items: center;">'+
        '                    <span style="width: 130px; display: inline-block; background-color:#f3c200; color: white; text-align: center; padding: 7.5px">PREDEPLOYED</span>'+
        '                    <a class="btn green-seagreen" style="margin-left: 10px;" onclick="nextDisplayedPage(2)" data-getcoord[0]="16 predeployed-spkView f,bb,r">View</a>'+
        '                    <a class="btn green-seagreen" style="margin-left: 10px;">Cancel</a>'+
        '                    <a class="btn green-seagreen" style="margin-left: 10px;">Terminate</a>'+
        '                    <a class="btn green-seagreen" style="margin-left: 10px;">Delete</a>'+
        '                </div>'+
        '            </div><br><br>'+
        '            <div class="horizontal-card" style="position: relative;display: -webkit-inline-box;border: 1px solid gray;">'+
        '                <div class="bg-grey-steel" style="width: 130px; height: 130px; text-align: center;">'+
        '                    <p>PT xxxxxxxxxx</p>'+
        '                </div>'+
        '                <div class="row" style="display: inline-block;flex-direction: column;">'+
        '                    <div class="col-md-12">'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">No. Tiket</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">No. Plat</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">No. Policy</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">No. Claim</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">SPK Date</div>'+
        '                        </div>'+
        '                    </div>'+
        '                    <div class="col-md-12">'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                    </div>'+
        ''+
        '                    <div class="col-md-12">'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">Reporter Name</div>'+
        '                        </div>'+
        '                        '+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">Surveyor Name</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">User Deploy</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">SPR</div>'+
        '                        </div>'+
        '                    </div>'+
        '                    <div class="col-md-12">'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                    </div>'+
        '                </div>'+
        '                <div class="horizontal-card-footer" style="position: absolute; left: 0px; right: 0px; bottom: 0px; height: auto; display: flex; align-items: center;">'+
        '                    <span style="width: 130px; display: inline-block; background-color:#f3c200; color: white; text-align: center; padding: 7.5px">PREDEPLOYED</span>'+
        '                    <a class="btn green-seagreen" style="margin-left: 10px;">View</a>'+
        '                    <a class="btn green-seagreen" style="margin-left: 10px;">Cancel</a>'+
        '                    <a class="btn green-seagreen" style="margin-left: 10px;">Terminate</a>'+
        '                    <a class="btn green-seagreen" style="margin-left: 10px;">Delete</a>'+
        '                </div>'+
        '            </div><br><br>'+
        '            <div class="horizontal-card" style="position: relative;display: -webkit-inline-box;border: 1px solid gray;">'+
        '                <div class="bg-grey-steel" style="width: 130px; height: 130px; text-align: center;">'+
        '                    <p>PT xxxxxxxxxx</p>'+
        '                </div>'+
        '                <div class="row" style="display: inline-block;flex-direction: column;">'+
        '                    <div class="col-md-12">'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">No. Tiket</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">No. Plat</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">No. Policy</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">No. Claim</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">SPK Date</div>'+
        '                        </div>'+
        '                    </div>'+
        '                    <div class="col-md-12">'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                    </div>'+
        ''+
        '                    <div class="col-md-12">'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">Reporter Name</div>'+
        '                        </div>'+
        '                        '+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">Surveyor Name</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">User Deploy</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text" style="font-weight: bold;">SPR</div>'+
        '                        </div>'+
        '                    </div>'+
        '                    <div class="col-md-12">'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                        <div class="col-md-2">'+
        '                            <div class="card-text">xxxxxxxxxx</div>'+
        '                        </div>'+
        '                    </div>'+
        '                </div>'+
        '                <div class="horizontal-card-footer" style="position: absolute; left: 0px; right: 0px; bottom: 0px; height: auto; display: flex; align-items: center;">'+
        '                    <span style="width: 130px; display: inline-block; background-color:#f3c200; color: white; text-align: center; padding: 7.5px">PREDEPLOYED</span>'+
        '                    <a class="btn green-seagreen" style="margin-left: 10px;">View</a>'+
        '                    <a class="btn green-seagreen" style="margin-left: 10px;">Cancel</a>'+
        '                    <a class="btn green-seagreen" style="margin-left: 10px;">Terminate</a>'+
        '                    <a class="btn green-seagreen" style="margin-left: 10px;">Delete</a>'+
        '                </div>'+
        '            </div><br><br>'+
        '                <div class="row">'+
        '                    <div class="col-md-8 col-sm-12">'+
        '                        <div class="dataTables_paginate paging_bootstrap_extended">'+
        '                            <div class="pagination-panel"> Page '+
        '                                <a href="#" class="btn btn-sm default prev disabled">'+
        '                                    <i class="fa fa-angle-left"></i>'+
        '                                </a>'+
        '                                <input type="text" class="pagination-panel-input form-control input-sm input-inline input-mini" maxlenght="5" style="text-align:center; margin: 0 5px;">'+
        '                                <a href="#" class="btn btn-sm default next">'+
        '                                    <i class="fa fa-angle-right"></i>'+
        '                                </a> of '+
        '                                <span class="pagination-panel-total">2032</span>'+
        '                            </div>'+
        '                        </div>'+
        '                        <div class="dataTables_length">'+
        '                            <label>'+
        '                                <span class="seperator">|</span>View '+
        '                                <select name="datatable_ajax_length" aria-controls="datatable_ajax" class="form-control input-xs input-sm input-inline">'+
        '                                    <option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option>'+
        '                                </select> records'+
        '                            </label>'+
        '                        </div>'+
        '                        <div class="dataTables_info">'+
        '                            <span class="seperator">|</span>Found total 20,317 records'+
        '                        </div>'+
        '                    </div>'+
        '                    <div class="col-md-4 col-sm-12"></div>'+
        '                </div>'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '  </div>'+
        '</div>'+
        '</div>'
    },
    pageCoord : [],
    pageTime : 0
}