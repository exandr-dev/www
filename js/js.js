 $(document).ready(function(){
   // �� ������� �� ������ "������" - ����������� ���� � ������� ������
    $("#help").on('click', function() {
        $("#show-help").fadeIn(500);
        $("#mask").fadeIn(500);
        $('#mask').fadeTo("slow",0.5);
    });

    // ���� �� ���� ������������ ���� - ������� ���������� ���� � ����
    $("#mask").on('click', function() {
        $("#show-help").fadeOut(1000);
        $("#mask").fadeOut(1000);
        $("#table-big").fadeOut(1000);
    });

    // ���� �� ������������ ���� - ������� ���������� ���� � ����
    $("#show-help").on('click', function() {
      $("#show-help").hide();
      $("#mask").hide();
    });

    // ���� �� ������ ����� - ����� ���� � ������� �����
    $("#table").on('click', function() {
        $("#table-big").fadeIn(1000);
        $("#table-big").text('����� ������ �����: '+$(this).text());
        $("#mask").fadeIn(1000);
        $("#mask").fadeTo("slow",0.5);
    });

    $("#table-big").on('click', function() {
        $("#table-big").hide();
        $("#mask").hide();

    });

    $("#basket").on('click', function() {
      $(".form").hide();
      $("#show-basket").fadeIn(500);
      $("#main-menu").text("�������");
    });


    $("#del").on('click', function() {
      $(this).parent().hide();
    })

    $(".basket-plus").on('click', function() {
        var count = $(this).next().text();;
        count++;
        $(this).next().text(count);

    })

    $(".basket-minus").on('click', function() {
      var count = +$(this).prev().text();
      if (count>1) {
        count--;
        $(this).prev().text(count);
      } else {
        $(this).prev().text("1");
      }
    })

    $(".del").on('click', function() {
        $(this).parent().fadeOut(1000);
    })

    $(".menu-item-box").on('click', function() {
      $(".form").hide();
      var id = $(this).attr("id");
      var title = $(this).find("#menu-item-text").text();
      $("#"+id+"-page").fadeIn(500);
      $("#menu-title").text(title);
    })

    $(".action-item-help").on('click', function() {
      var descr = $(this).parent().data("text");
      $("#action-text").text(descr);
    })

    $(".cat-box").on('click', function() {
      $(".form").hide();
      $("#dishes-page").fadeIn(500);
    })

    $("#show-dish").on('click', function() {
      $(".form").hide();
      $("#dish-page").fadeIn(500);
    })

    $("#close").on('click', function() {
      $(".form").hide();
      $("#dishes-page").fadeIn(500);
    })

    // ��������� ������� �� ������ ���� - ��������� ����� ����, ������, ��������� ������
    $(".menu-item-box").hover(function() {
      var id = $(this).attr("id");
      $(this).find('#menu-item').css("background-color", "#00a94f");
      $(this).find('#menu-item-text').css("color","#ffffff");
      $(this).find('.menu-item-img').css("background-image", "url(images/"+id+"-white.png)");

    }, function() {
      var id = $(this).attr("id");
      $(this).find('#menu-item').css("background-color", "#e4e6e6");
      $(this).find('#menu-item-text').css("color","#00a651");
      $(this).find('.menu-item-img').css("background-image", "url(images/"+id+"-green.png)");
    });

 });