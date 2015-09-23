/**
 * Created by Bibek on 9/21/15.
 */

;
(function () {
    $(document).ready(function () {

        $('#category_list').chosen({ width: '100%' });
        $('#category_list1').chosen({ width: '100%' });

        $('#category_list').on('change', function(e) {
            $('#category_list1').val(this.value).trigger("chosen:updated");

        });

        $('#category_list1').on('change', function(e) {
            $('#category_list').val(this.value).trigger("chosen:updated");

        });

    });

})();