
//change status 
const host = 'http://localhost:3000'

const handleStatus = (id,status,prefix) => {

    let newStatus = status == "active"? "inactive":"active"
    let link = `/admin/${prefix}/${id}/${newStatus}`
    let icon = "minus"
    let color = "btn-danger"
    if(newStatus == "active"){
        icon = "check"
        color = "btn-success"
    }

    let newHtml  = `<a href="javascript:handleStatus('${id}','${newStatus}','${prefix}')" class="rounded-circle btn btn-sm ${color}"><i class="fas fa-${icon}"></i></a>`

    $.ajax({
        type: "get",
        url: link,
        dataType: "json",
        success: function (response) {
            $(`#status-${id}`).html(newHtml);
            toastr.success('Change successfully');
        }
    });

}


// change ordering
$('.ordering').change(function (e) { 
    e.preventDefault();
    let ordering = $(this).val();
    
    if(ordering < 0){
        toastr.error('Change Failed');
        return;
    }

    let id = $(this).data("id");
    let currentLink = window.location.href
    let linkPart = currentLink.split('/')
    let link = `/admin/product/${linkPart[5]}/changeOrdering/${id}/${ordering}`

    $.ajax({
        type: "get",
        url: link,
        dataType: "json",
        success: function (response) {
            toastr.success('Change successfully');
        }
    });
    
});

$('#image-input').change(function (e) { 
    e.preventDefault();
    let reader = new FileReader()
    reader.onload = function() {
        $('#image-preview').attr('src',reader.result).show();
    }
    reader.readAsDataURL(e.target.files[0]);
});

$(document).ready(function () {
    var imgsrc = document.getElementById("image-preview").src;

    if(imgsrc != "http://localhost:3000/admin/item/form"){
        $('#image-preview').show();
    }else{
        $('#image-preview').hide();
    }
  
});

$(document).on('click','.dropdown-item',function(e){
    e.preventDefault();
    let categoryName = $(this).text()
    let category = $(this).data("id")
    let newLink = `http://localhost:3000/admin/item?categoryId=${category}`
    window.location.href = newLink
})

const deleteItem = (link) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
   
            window.location.href = `${host}${link}`
        }
      });
}

$(document).ready(function() {
    $('#summernote').summernote({
       height: 300
       , // set editor heig
  
    });
    $('form').on('submit', function() {
        var summernoteContent = $('#summernote').summernote('code');
        var plainTextContent = $('<div>').html(summernoteContent).text(); 
        $('#hidden-description').val(plainTextContent); // Set the content to the hidden input
    });
 });



$(document).ready(function() {
    $('#color').change(function() {
        var color = $(this).val();
        $('#colorHex').val(color);
    });
});


$(document).ready(function() {
    let btnCheckAll = $('#check-all'); 
    let btnCheck = $('input[name="cid"]'); 

    // Toggle all checkboxes when "Select All" is clicked
    btnCheckAll.on('change', function() {
        let isChecked = $(this).is(':checked');
        btnCheck.prop('checked', isChecked);
    });

    // Update the "Select All" checkbox state when individual checkboxes are clicked
    btnCheck.on('change', function() {
        let allChecked = btnCheck.length === btnCheck.filter(':checked').length;
        btnCheckAll.prop('checked', allChecked);
    });
});

{/* <div class="custom-control custom-checkbox">
								<input class="custom-control-input cbAll" type="checkbox" id="check-all">
								<label for="check-all" class="custom-control-label"></label>
							</div>
                            <div class="custom-control custom-checkbox">
										<input class="custom-control-input" type="checkbox" name="cid" id="check1" value="1">
										<label for="check1" class="custom-control-label"></label>
									</div> */}