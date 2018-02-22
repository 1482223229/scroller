import $ from 'jquery'; // 引入jquery

function AddTag(createTags) {
        var start = 0; //手指按下坐标
        var cha = 0;   // 手指按下 离开坐标差
        // $('#swiper-container') 滚动的容器
        // $('#slide_box') 加载节点的大盒子
    
        $('#swiper-container')[0].addEventListener('touchstart', function (e) {
            start = e.touches[0].clientY;
        })
        $('#swiper-container')[0].addEventListener('touchmove', function (e) {
            cha = e.touches[0].clientY - start;
        })
        $('#swiper-container')[0].addEventListener('touchend', function (e) {
            const scrollBottom = $('#slide_box').height() - $('#swiper-container').scrollTop() - $('#swiper-container').height();
            const scrollTop = $('#swiper-container').scrollTop();
            
            if (cha < -100 && scrollBottom <= 50) {
                creatTag($('#slide_box'), createTags());
            } else if (cha > 100 && scrollTop <= 0) {
                window.location.reload();
            } else {
                return
            }
        })
        function creatTag(box, addTags) { // 将要加载的节点appen到#slide_box里
            $('#slide_box')[0].appendChild(addTags);
        }
    }
export default AddTag;