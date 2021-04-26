$(function(){
  //drawerjs
  $('.drawer').drawer()


  //smoothscroll
  // #から始まるURLがクリックされた時
  $('a[href^="#"]').click(function(){
    //移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = $(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlにしてトップへ戻るようにする
    let target = $("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = $(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    $("html,body").animate(
      {
        //ヘッダーの高さを引いてスクロール
        scrollTop:position - $( '#js-header' ).outerHeight()
      },speed
    );
    return false;
  });


  //wowjs
  new WOW().init();

  //googleform

  let $form = $('#js-form')

  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $('#js-error').slideDown()
        }
      } 
    });
    return false; 
  }); 

  // formの入力確認
  let $submit = $('#js-submit')
  $('#js-form input , #js-form textarea').on('change',function(){
    if(
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      //プライバシーポリシー同意のチェック
      $('#js-form input[name="entry.1397699112"]').prop('checked') === true
    ){
      //全て入力された時
      $submit.prop('disabled',false)
      $submit.addClass('-active')
    }else{
      //全て入力されていない時
      $submit.prop('disabled',true)
      $submit.removeClass('-active')

    }

  })

})
