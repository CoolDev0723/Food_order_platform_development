@extends('admin.layouts.master')
@section("title") Edit Addon Category - Dashboard
@endsection
@section('content')
<div class="page-header">
    <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
            <h4><i class="icon-circle-right2 mr-2"></i>
                <span class="font-weight-bold mr-2">Editing</span>
                <span class="badge badge-primary badge-pill animated flipInX">"{{ $addonCategory->name }}"</span>
            </h4>
            <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
        </div>
    </div>
</div>
<div class="content">
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <form action="{{ route('admin.updateAddonCategory') }}" method="POST" enctype="multipart/form-data">
                    <legend class="font-weight-semibold text-uppercase font-size-sm">
                        <i class="icon-tree6 mr-2"></i> Addon Category
                    </legend>
                    <input type="hidden" name="id" value="{{ $addonCategory->id }}">
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Name:</label>
                        <div class="col-lg-9">
                            <input value="{{ $addonCategory->name }}" type="text" class="form-control form-control-lg" name="name"
                                placeholder="Addon Category Name" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>Type:</label>
                        <div class="col-lg-9">
                            <select name="type" class="form-control form-control-lg select">
                                <option value="SINGLE" @if($addonCategory->type == "SINGLE") selected="selected" @endif> Single Selection </option>
                                <option value="MULTI" @if($addonCategory->type == "MULTI") selected="selected" @endif> Multiple Selection </option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">Description:</label>
                        <div class="col-lg-9">
                            <input type="text" class="form-control form-control-lg" name="description" value="{{ $addonCategory->description }}" 
                                placeholder="Short Description (50-80 characters)" >
                                <span class="help-text text-muted"> This will be disaplayed in the Items page while selecting Addon Categories</span>
                        </div>
                    </div>

                    <div class="mt-4">
                        <legend class="font-weight-semibold text-uppercase font-size-sm" id="addonsLegend">
                            <i class="icon-list2 mr-2"></i> Addons
                        </legend>
                    </div>
                    @foreach ($addons as $addon)
                    <div class='form-group row'> 
                        <div class='col-lg-5'>
                        <input type="text" hidden name="addon_old[{{$loop->index}}][id]" value="{{$addon->id}}">
                            <input type='text' class='form-control clock form-control-lg'  value="{{ $addon->name }}" name="addon_old[{{$loop->index}}][name]" placeholder="Addon Name"> 
                        </div> 
                        <div  class='col-lg-5'>
                            <input type='text' class='form-control clock form-control-lg' value="{{ $addon->price }}" name="addon_old[{{$loop->index}}][price]" placeholder="Addon Price"> 
                        </div> 
                        <div class='col-lg-1'> 
                            <div class="checkbox checkbox-switchery ml-1" style="padding-top: 0.8rem;">
                                <label>
                                <input value="true" type="checkbox" class="action-switch"
                                @if($addon->is_active) checked="checked" @endif data-id="{{ $addon->id }}">
                                </label>
                            </div>
                        </div>
                        <div class='col-lg-1'> 
                        <div class='btn btn-danger' data-popup='tooltip' data-placement='right' onclick="del({{$addon->id}})" title='Delete Addon'><i class='icon-bin'></i></div>
                        
                    </div>
                        
                    </div>
                    @endforeach
                    <div id="addon" class="timeSlots">
                    </div>
                    <a href="javascript:void(0)" onclick="add(this)" class="btn btn-secondary btn-labeled btn-labeled-left mr-2"> <b><i class="icon-plus22"></i></b>Add Addon</a>

                    @csrf
                    <div class="text-right">
                        <button type="submit" class="btn btn-primary">
                        UPDATE
                        <i class="icon-database-insert ml-1"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
        
        function add(data) {
            $('#addonsLegend').removeClass('hidden');
            var newAddon = document.createElement("div");
            newAddon.innerHTML ="<div class='form-group row'> <div class='col-lg-5'><input type='text' class='form-control  form-control-lg' placeholder='Addon Name' name='addon_names[]' required> </div> <div class='col-lg-5'> <input type='text' class='form-control  form-control-lg' name='addon_prices[]' placeholder='Addon Price'  required> </div> <div class='col-lg-2'><button class='remove btn btn-danger' data-popup='tooltip' data-placement='right' title='Remove Addon'><i class='icon-cross2'></i></button></div></div>";
            document.getElementById('addon').appendChild(newAddon);
        }

        function del(id) {
          var r = confirm("Confirm Delete Addon");
          if (r == true) {
            let url = "{{ url('admin/addon/delete/') }}/"+id;
            window.location.href = url;
          }
        }

        $(function() {

         $('.price').numeric({allowThouSep:false, maxDecimalPlaces: 2 });

         //Switch Action Function
         if (Array.prototype.forEach) {
                var elems = Array.prototype.slice.call(document.querySelectorAll('.action-switch'));
                elems.forEach(function(html) {
                    var switchery = new Switchery(html, { color: '#00a700' });
                });
            }
            else {
                var elems = document.querySelectorAll('.action-switch');
                for (var i = 0; i < elems.length; i++) {
                    var switchery = new Switchery(elems[i], { color: '#00a700' });
                }
            }

          $('.action-switch').click(function(event) {
             let id = $(this).attr("data-id")
             let url = "{{ url('/admin/addon/disable/') }}/"+id;
             window.location.href = url;
          });

      
          $('.select').select2({
              minimumResultsForSearch: -1,
          });

          $(document).on("click", ".remove", function() {
              $(this).tooltip('hide')
              $(this).parent().parent().remove();
          });
      }); 
</script>
@endsection