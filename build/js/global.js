jQuery(function(s){var o=0,e=function(){o=s(window).scrollTop()+s(window).height()/1.5,s(".js-animatedOrder").each(function(){var e=s(this);if(o>e.offset().top){var n=0;e.find(".js-orderEl").each(function(){var o=s(this);setTimeout(function(){o.removeClass("js-orderEl")},n);n+=e.data("animation-step")}),e.removeClass("js-animatedOrder")}})};e(),s(window).on("scroll",function(){e(),0<s(window).scrollTop()?s(".js-header").hasClass("fly")||s(".js-header").addClass("fly"):s(".js-header").removeClass("fly")}),s(".js-niceScroll").niceScroll({cursorborder:"",background:"transparent",cursorcolor:"#12172A",autohidemode:!1,cursorwidth:"4px",zindex:"auto"});var n=function(o){o.hasClass("show")?setTimeout(function(){s(".js-niceScroll").getNiceScroll().resize()},100):setTimeout(function(){n(o)},100)};s(".js-dropdownLink").on("click",function(){var o=s(this).parents(".js-dropdown");n(o)}),s(".js-dropdownMenu div div").on("click",function(){var o=s(this);o.parents(".js-dropdown").find(".js-dropdownLinkText").text(o.text()),o.parents(".js-dropdownMenu").find("div").removeClass("active"),o.addClass("active")}),s(".js-scrollTo").on("click",function(){return s("html, body").animate({scrollTop:s(s(this).data("scroll")).offset().top-50},800),!1}),s(".js-mobiLink").on("click",function(){s("body").toggleClass("menuOpened")}),s(document).mouseup(function(o){if(s("body").hasClass("menuOpened")){var e=s(".g-header__menu");e.is(o.target)||0!==e.has(o.target).length||s("body").removeClass("menuOpened")}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6WyJqUXVlcnkiLCIkIiwid2luZG93Qm90dG9tTGluZSIsImNoZWNrQW5pbWF0aW9uIiwid2luZG93Iiwic2Nyb2xsVG9wIiwiaGVpZ2h0IiwiZWFjaCIsIl90aGlzIiwidGhpcyIsIm9mZnNldCIsInRvcCIsIl90aW1lciIsImZpbmQiLCJfX3RoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJkYXRhIiwib24iLCJoYXNDbGFzcyIsImFkZENsYXNzIiwibmljZVNjcm9sbCIsImN1cnNvcmJvcmRlciIsImJhY2tncm91bmQiLCJjdXJzb3Jjb2xvciIsImF1dG9oaWRlbW9kZSIsImN1cnNvcndpZHRoIiwiemluZGV4Iiwic2hvd05pY2VTY3JvbGwiLCJfcGFyZW50IiwiZ2V0TmljZVNjcm9sbCIsInJlc2l6ZSIsInBhcmVudHMiLCJ0ZXh0IiwiYW5pbWF0ZSIsInRvZ2dsZUNsYXNzIiwiZG9jdW1lbnQiLCJtb3VzZXVwIiwiZSIsImlzIiwidGFyZ2V0IiwiaGFzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBTyxTQUFVQyxHQUNiLElBQUlDLEVBQW1CLEVBRW5CQyxFQUFpQixXQUNqQkQsRUFBbUJELEVBQUVHLFFBQVFDLFlBQWNKLEVBQUVHLFFBQVFFLFNBQVcsSUFFaEVMLEVBQUUscUJBQXFCTSxLQUFLLFdBQ3hCLElBQUlDLEVBQVFQLEVBQUVRLE1BQ2QsR0FBSVAsRUFBbUJNLEVBQU1FLFNBQVNDLElBQUssQ0FDdkMsSUFBSUMsRUFBUyxFQUViSixFQUFNSyxLQUFLLGVBQWVOLEtBQUssV0FDM0IsSUFBSU8sRUFBU2IsRUFBRVEsTUFFR00sV0FBVyxXQUN6QkQsRUFBT0UsWUFBWSxlQUNwQkosR0FFSEEsR0FBVUosRUFBTVMsS0FBSyxvQkFHekJULEVBQU1RLFlBQVksd0JBSzlCYixJQUNBRixFQUFFRyxRQUFRYyxHQUFHLFNBQVUsV0FDbkJmLElBRTRCLEVBQXhCRixFQUFFRyxRQUFRQyxZQUNMSixFQUFFLGNBQWNrQixTQUFTLFFBQzFCbEIsRUFBRSxjQUFjbUIsU0FBUyxPQUc3Qm5CLEVBQUUsY0FBY2UsWUFBWSxTQUlwQ2YsRUFBRSxrQkFBa0JvQixXQUFXLENBQzNCQyxhQUFjLEdBQ2RDLFdBQVksY0FDWkMsWUFBYSxVQUNiQyxjQUFjLEVBQ2RDLFlBQWEsTUFDYkMsT0FBUSxTQUlaLElBQUlDLEVBQWlCLFNBQVVDLEdBQ3ZCQSxFQUFRVixTQUFTLFFBQ2pCSixXQUFXLFdBQ1BkLEVBQUUsa0JBQWtCNkIsZ0JBQWdCQyxVQUNyQyxLQUVIaEIsV0FBVyxXQUNQYSxFQUFlQyxJQUNoQixNQUtYNUIsRUFBRSxvQkFBb0JpQixHQUFHLFFBQVMsV0FDOUIsSUFBSVcsRUFBVTVCLEVBQUVRLE1BQU11QixRQUFRLGdCQUU5QkosRUFBZUMsS0FFbkI1QixFQUFFLDRCQUE0QmlCLEdBQUcsUUFBUyxXQUN0QyxJQUFJVixFQUFRUCxFQUFFUSxNQUNkRCxFQUFNd0IsUUFBUSxnQkFBZ0JuQixLQUFLLHdCQUF3Qm9CLEtBQUt6QixFQUFNeUIsUUFDdEV6QixFQUFNd0IsUUFBUSxvQkFBb0JuQixLQUFLLE9BQU9HLFlBQVksVUFDMURSLEVBQU1ZLFNBQVMsWUFHbkJuQixFQUFFLGdCQUFnQmlCLEdBQUcsUUFBUyxXQUsxQixPQUpBakIsRUFBRSxjQUFjaUMsUUFBUSxDQUNwQjdCLFVBQVdKLEVBQUVBLEVBQUVRLE1BQU1RLEtBQUssV0FBV1AsU0FBU0MsSUFBTSxJQUNyRCxNQUVJLElBR1hWLEVBQUUsZ0JBQWdCaUIsR0FBRyxRQUFTLFdBQzFCakIsRUFBRSxRQUFRa0MsWUFBWSxnQkFFMUJsQyxFQUFFbUMsVUFBVUMsUUFBUSxTQUFVQyxHQUMxQixHQUFJckMsRUFBRSxRQUFRa0IsU0FBUyxjQUFlLENBQ2xDLElBQUlVLEVBQVU1QixFQUFFLG1CQUNYNEIsRUFBUVUsR0FBR0QsRUFBRUUsU0FFbUIsSUFBakNYLEVBQVFZLElBQUlILEVBQUVFLFFBQVFFLFFBQ3RCekMsRUFBRSxRQUFRZSxZQUFZIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgdmFyIHdpbmRvd0JvdHRvbUxpbmUgPSAwO1xyXG5cclxuICAgIHZhciBjaGVja0FuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3dCb3R0b21MaW5lID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpIC8gMS41O1xyXG5cclxuICAgICAgICAkKFwiLmpzLWFuaW1hdGVkT3JkZXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dCb3R0b21MaW5lID4gX3RoaXMub2Zmc2V0KCkudG9wKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3RpbWVyID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5maW5kKFwiLmpzLW9yZGVyRWxcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9fdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbF9pZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX3RoaXMucmVtb3ZlQ2xhc3MoXCJqcy1vcmRlckVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIF90aW1lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF90aW1lciArPSBfdGhpcy5kYXRhKFwiYW5pbWF0aW9uLXN0ZXBcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVDbGFzcyhcImpzLWFuaW1hdGVkT3JkZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tBbmltYXRpb24oKTtcclxuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2hlY2tBbmltYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDApIHtcclxuICAgICAgICAgICAgaWYgKCEkKFwiLmpzLWhlYWRlclwiKS5oYXNDbGFzcyhcImZseVwiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5qcy1oZWFkZXJcIikuYWRkQ2xhc3MoXCJmbHlcIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIi5qcy1oZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJmbHlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5qcy1uaWNlU2Nyb2xsXCIpLm5pY2VTY3JvbGwoe1xyXG4gICAgICAgIGN1cnNvcmJvcmRlcjogXCJcIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgY3Vyc29yY29sb3I6IFwiIzEyMTcyQVwiLFxyXG4gICAgICAgIGF1dG9oaWRlbW9kZTogITEsXHJcbiAgICAgICAgY3Vyc29yd2lkdGg6IFwiNHB4XCIsXHJcbiAgICAgICAgemluZGV4OiBcImF1dG9cIixcclxuICAgICAgICAvL29uZWF4aXNtb3VzZW1vZGU6ICExLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHNob3dOaWNlU2Nyb2xsID0gZnVuY3Rpb24gKF9wYXJlbnQpIHtcclxuICAgICAgICBpZiAoX3BhcmVudC5oYXNDbGFzcyhcInNob3dcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmpzLW5pY2VTY3JvbGxcIikuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2hvd05pY2VTY3JvbGwoX3BhcmVudCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAkKFwiLmpzLWRyb3Bkb3duTGlua1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3BhcmVudCA9ICQodGhpcykucGFyZW50cyhcIi5qcy1kcm9wZG93blwiKTtcclxuXHJcbiAgICAgICAgc2hvd05pY2VTY3JvbGwoX3BhcmVudCk7XHJcbiAgICB9KTtcclxuICAgICQoXCIuanMtZHJvcGRvd25NZW51IGRpdiBkaXZcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKTtcclxuICAgICAgICBfdGhpcy5wYXJlbnRzKFwiLmpzLWRyb3Bkb3duXCIpLmZpbmQoXCIuanMtZHJvcGRvd25MaW5rVGV4dFwiKS50ZXh0KF90aGlzLnRleHQoKSk7XHJcbiAgICAgICAgX3RoaXMucGFyZW50cyhcIi5qcy1kcm9wZG93bk1lbnVcIikuZmluZChcImRpdlwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICBfdGhpcy5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuanMtc2Nyb2xsVG9cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJCgkKHRoaXMpLmRhdGEoXCJzY3JvbGxcIikpLm9mZnNldCgpLnRvcCAtIDUwXHJcbiAgICAgICAgfSwgODAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5qcy1tb2JpTGlua1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIm1lbnVPcGVuZWRcIik7XHJcbiAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHsgLy8g0YHQvtCx0YvRgtC40LUg0LrQu9C40LrQsCDQv9C+INCy0LXQsS3QtNC+0LrRg9C80LXQvdGC0YNcclxuICAgICAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJtZW51T3BlbmVkXCIpKSB7XHJcbiAgICAgICAgICAgIHZhciBfcGFyZW50ID0gJChcIi5nLWhlYWRlcl9fbWVudVwiKTsgLy8g0YLRg9GCINGD0LrQsNC30YvQstCw0LXQvCBJRCDRjdC70LXQvNC10L3RgtCwXHJcbiAgICAgICAgICAgIGlmICghX3BhcmVudC5pcyhlLnRhcmdldCkgLy8g0LXRgdC70Lgg0LrQu9C40Log0LHRi9C7INC90LUg0L/QviDQvdCw0YjQtdC80YMg0LHQu9C+0LrRg1xyXG4gICAgICAgICAgICAgICAgJiZcclxuICAgICAgICAgICAgICAgIF9wYXJlbnQuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHsgLy8g0Lgg0L3QtSDQv9C+INC10LPQviDQtNC+0YfQtdGA0L3QuNC8INGN0LvQtdC80LXQvdGC0LDQvFxyXG4gICAgICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJtZW51T3BlbmVkXCIpOyAvLyDRgdC60YDRi9Cy0LDQtdC8INC10LPQvlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7Il19
