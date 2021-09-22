@if(Session::has('success'))
<script>
    $(function () {
        $.jGrowl("{{ Session::get('success') }}", {
            position: 'bottom-center',
            @hasrole("Store Owner")
            header:  '{{__('storeDashboard.successNotification')}}',
            @else
            header: 'SUCCESS 👌',
            @endrole
            theme: 'bg-success',
        });    
    });
</script>
@endif
@if(Session::has('message'))
<script>
    $(function () {
        $.jGrowl("{{ Session::get('message') }}", {
            position: 'bottom-center',
            @hasrole("Store Owner")
            header:  '{{__('storeDashboard.woopssNotification')}}',
            @else
            header: 'Wooopsss ⚠️',
            @endrole
            theme: 'bg-warning',
        });    
    });
</script>
@endif
@if($errors->any())
<script>
    $(function () {
        $.jGrowl("{{ implode('', $errors->all(':message')) }}", {
            position: 'bottom-center',
            header: 'ERROR ⁉️',
            theme: 'bg-danger',
        });    
    });
</script>
@endif

@if(session()->get('elflag'))
<script>
    $(function () {
        alert("{{ base64_decode("WW91IGRvIG5vdCBoYXZlIGFuIEV4dGVuZGVkIExpY2Vuc2UgdG8gZGVwbG95IHRoZSBSZWFjdEpzIG1vZGlmaWNhdGlvbnMuIEFsbCB0aGUgbW9kaWZpZWQgZmlsZXMgaGF2ZSBiZWVuIHJlbW92ZWQuIEtpbmRseSByZXZlcnQgYmFjayB0byB0aGUgb3JpZ2luYWwgZnJvbnRlbmQgZmlsZXMu") }}")
    });
</script>
@endif