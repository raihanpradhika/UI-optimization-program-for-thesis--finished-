let predeployedPage2 = {
    pageIndex : 1,
    pageName : "predeployedPage2",
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
        '    '+
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
        '    <div class="col-md-9" style="overflow: auto;">'+
        '      <div class="col-md-12" style="padding-bottom: 50px;">'+
        '            <div id="datatable_ajax_wrapper" class="dataTables_wrapper dataTables_extended_wrapper no-footer">'+
        '                <div class="row">'+
        '                    <div class="col-md-8 col-sm-12">'+
        '                        <div class="dataTables_paginate paging_bootstrap_extended" id="datatable_ajax_paginate">'+
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
        '                        <div class="dataTables_length" id="datatable_ajax_length">'+
        '                            <label>'+
        '                                <span class="seperator">|</span>View '+
        '                                <select name="datatable_ajax_length" aria-controls="datatable_ajax" class="form-control input-xs input-sm input-inline">'+
        '                                    <option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option><option value="150">150</option><option value="-1">All</option>'+
        '                                </select> records'+
        '                            </label>'+
        '                        </div>'+
        '                        <div class="dataTables_info" id="datatable_ajax_info" role="status" aria-live="polite">'+
        '                            <span class="seperator">|</span>Found total 20,317 records'+
        '                        </div>'+
        '                    </div>'+
        '                    <div class="col-md-4 col-sm-12">'+
        '                        <div class="table-group-actions pull-right"></div>'+
        '                    </div>'+
        '                    <div id="datatable_ajax_processing" class="dataTables_processing" style="display: none;">Processing...</div>'+
        '                </div>'+
        '                <table class="table table-striped table-bordered table-hover dataTable no-footer" id="datatable_ajax" aria-describedby="datatable_ajax_info" role="grid">'+
        '                <thead>'+
        '                    <tr role="row" class="heading">'+
        '                        <th width="5px" class="text-center sorting_disabled" rowspan="1" colspan="1" aria-label="#">#</th>'+
        '                        <th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Asuransi: activate to sort column ascending">Asuransi</th>'+
        '                        <th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Tiket: activate to sort column ascending">Tiket</th>'+
        '                        <th width="50px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Plat: activate to sort column ascending">Plat</th>'+
        '                        <th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Policy: activate to sort column ascending">Policy</th>'+
        '                        <th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Claim: activate to sort column ascending">Claim</th>'+
        '                        <th width="60px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="SPK: activate to sort column ascending">SPK</th>'+
        '                        <th width="120px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Reporter: activate to sort column ascending">Reporter</th>'+
        '                        <th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Workshop: activate to sort column ascending">Workshop</th>'+
        '                        <th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Surveyor: activate to sort column ascending">Surveyor</th>'+
        '                        <th width="80px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="User: activate to sort column ascending">User</th>'+
        '                        <th width="140px" class="text-center text-left sorting" tabindex="0" aria-controls="datatable_ajax" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Status</th>'+
        '                        <th width="80px" class="text-center sorting_disabled" rowspan="1" colspan="1" aria-label="Action">Action</th>'+
        '                    </tr>'+
        '                    <tr role="row" class="filter bg-grey-steel">'+
        '                        <th width="5px" rowspan="1" colspan="1"></th>'+
        '                        <th width="80px" class="text-center" rowspan="1" colspan="1"></th>'+
        '                        <th width="80px" class="text-center" colspan="4" rowspan="1">Nomor</th>'+
        '                        <th width="60px" class="text-center" rowspan="1" colspan="1">Date</th>'+
        '                        <th width="80px" class="text-center" rowspan="1" colspan="1">Name</th>'+
        '                        <th width="80px" class="text-center" rowspan="1" colspan="1"></th>'+
        '                        <th width="80px" class="text-center" rowspan="1" colspan="1">Name</th>'+
        '                        <th width="80px" class="text-center" rowspan="1" colspan="1">Deploy</th>'+
        '                        <th width="140px" class="text-center" rowspan="1" colspan="1"></th>'+
        '                        <th width="80px" class="text-center" rowspan="1" colspan="1">'+
        '                            <div class="text-center">'+
        '                                <button class="btn btn-sm yellow filter-submit margin-bottom tooltips" data-original-title="Filter" data-placement="top" data-container="body" data-getcoord[0]="15 predeployed-filterSubmit f,bb">'+
        '                                    <i class="fa fa-search"></i>'+
        '                                </button>'+
        '                            </div>'+
        '                        </th>'+
        '                    </tr>'+
        '                    <tr role="row" class="filter bg-grey-steel">'+
        '                        <td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td><td rowspan="1" colspan="1"></td>'+
        '                    </tr>'+
        '                </thead>'+
        '                <tbody>'+
        '                    <tr role="row" class="odd">'+
        '                        <td class=" text-center">1.</td>'+
        '                        <td class=" text-left">'+
        '                            <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> PT xxxxxxxxxxxxxxxxxxxxxxxx </span>'+
        '                        </td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">'+
        '                            <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> PREDEPLOYED </span>'+
        '                        </td>'+
        '                        <td class=" text-center">'+
        '                            <div class="btn-group" data-getcoord[0]="16 predeployed-spkDropdown f,bb">'+
        '                                <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SPK&nbsp;&nbsp;'+
        '                                    <i class="fa fa-angle-down"></i>'+
        '                                </button>'+
        '                                <ul class="dropdown-menu show pull-right" role="menu">'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view" onclick="nextDisplayedPage(2)" data-getcoord[0]="17 predeployed-spkView f,bb,r">View</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view-cancel-terminated">Cancel</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view-cancel-terminated">Terminate</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-delSPK">Delete</a>'+
        '                                    </li>'+
        '                                </ul>'+
        '                            </div>'+
        '                        </td>'+
        '                    </tr>'+
        '                    <tr role="row" class="even">'+
        '                        <td class=" text-center">2.</td>'+
        '                        <td class=" text-left">'+
        '                            <span class="badge bg-blue-steel bg-font-blue-steel badge-roundless"> PT xxxxxxxxxxxxxxxxxxxxxxxx </span>'+
        '                        </td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">'+
        '                            <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> PREDEPLOYED </span>'+
        '                        </td>'+
        '                        <td class=" text-center">'+
        '                            <div class="btn-group">'+
        '                                <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SPK&nbsp;&nbsp;'+
        '                                    <i class="fa fa-angle-down"></i>'+
        '                                </button>'+
        '                                <ul class="dropdown-menu pull-right" role="menu">'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view">View</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view-cancel-terminated">Cancel</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view-cancel-terminated">Terminate</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-delSPK">Delete</a>'+
        '                                    </li>'+
        '                                </ul>'+
        '                            </div>'+
        '                        </td>'+
        '                    </tr>'+
        '                    <tr role="row" class="odd">'+
        '                        <td class=" text-center">3.</td>'+
        '                        <td class=" text-left">'+
        '                            <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> PT xxxxxxxxxxxxxxxxxxxxxxxx </span>'+
        '                        </td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">'+
        '                            <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> PREDEPLOYED </span>'+
        '                        </td>'+
        '                        <td class=" text-center">'+
        '                            <div class="btn-group">'+
        '                                <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SPK&nbsp;&nbsp;'+
        '                                    <i class="fa fa-angle-down"></i>'+
        '                                </button>'+
        '                                <ul class="dropdown-menu pull-right" role="menu">'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view">View</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view-cancel-terminated">Cancel</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view-cancel-terminated">Terminate</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-delSPK">Delete</a>'+
        '                                    </li>'+
        '                                </ul>'+
        '                            </div>'+
        '                        </td>'+
        '                    </tr>'+
        '                    <tr role="row" class="even">'+
        '                        <td class=" text-center">4.</td>'+
        '                        <td class=" text-left">'+
        '                            <span class="badge bg-blue-steel bg-font-blue-steel badge-roundless"> PT xxxxxxxxxxxxxxxxxxxxxxxx </span>'+
        '                        </td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">'+
        '                            <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> PREDEPLOYED </span>'+
        '                        </td>'+
        '                        <td class=" text-center">'+
        '                            <div class="btn-group">'+
        '                                <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SPK&nbsp;&nbsp;'+
        '                                    <i class="fa fa-angle-down"></i>'+
        '                                </button>'+
        '                                <ul class="dropdown-menu pull-right" role="menu">'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view">View</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view-cancel-terminated">Cancel</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view-cancel-terminated">Terminate</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-delSPK">Delete</a>'+
        '                                    </li>'+
        '                                </ul>'+
        '                            </div>'+
        '                        </td>'+
        '                    </tr>'+
        '                    <tr role="row" class="odd">'+
        '                        <td class=" text-center">5.</td>'+
        '                        <td class=" text-left">'+
        '                            <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> PT xxxxxxxxxxxxxxxxxxxxxxxx </span>'+
        '                        </td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">'+
        '                            <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> PREDEPLOYED </span>'+
        '                        </td>'+
        '                        <td class=" text-center">'+
        '                            <div class="btn-group">'+
        '                                <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SPK&nbsp;&nbsp;'+
        '                                    <i class="fa fa-angle-down"></i>'+
        '                                </button>'+
        '                                <ul class="dropdown-menu pull-right" role="menu">'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view">View</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view-cancel-terminated">Cancel</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view-cancel-terminated">Terminate</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-delSPK">Delete</a>'+
        '                                    </li>'+
        '                                </ul>'+
        '                            </div>'+
        '                        </td>'+
        '                    </tr>'+
        '                    <tr role="row" class="even">'+
        '                        <td class=" text-center">6.</td>'+
        '                        <td class=" text-left">'+
        '                            <span class="badge bg-blue-steel bg-font-blue-steel badge-roundless"> PT xxxxxxxxxxxxxxxxxxxxxxxx </span>'+
        '                        </td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">xxxxxxxxxx</td>'+
        '                        <td class=" text-left">'+
        '                            <span class="badge bg-yellow-crusta bg-font-yellow-crusta badge-roundless"> PREDEPLOYED </span>'+
        '                        </td>'+
        '                        <td class=" text-center">'+
        '                            <div class="btn-group">'+
        '                                <button class="btn green-meadow btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false" style="margin-right: 0px;"> SPK&nbsp;&nbsp;'+
        '                                    <i class="fa fa-angle-down"></i>'+
        '                                </button>'+
        '                                <ul class="dropdown-menu pull-right" role="menu">'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view">View</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view-cancel-terminated">Cancel</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-view-cancel-terminated">Terminate</a>'+
        '                                    </li>'+
        '                                    <li>'+
        '                                        <a href="javascript:;" class="btn-delSPK">Delete</a>'+
        '                                    </li>'+
        '                                </ul>'+
        '                            </div>'+
        '                        </td>'+
        '                    </tr>'+
        '                </tbody>'+
        '            </table>'+
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
        ''+
        '  <div class="footer navbar-fixed-bottom" style="background-color: #364150;">'+
        '    <div class="navbar-header">'+
        '        <div class="page-logo">'+
        '            <a onclick="nextDisplayedPage(0)">'+
        '                <img style="width:120px;height:35px;padding-top:15px ;" src="https://primasis.net/BengkelNet_Insurance/assets/img/Logo.jpg" alt="logo" class="logo-default"> '+
        '            </a>'+
        '        </div>'+
        '    </div>'+
        '    <ul class="nav navbar-nav">'+
        '      <li class="dropup">'+
        '        <a class="dropdown-toggle" data-toggle="dropdown" onclick="nextDisplayedPage(0)">Home'+
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