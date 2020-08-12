document.addEventListener('scroll', function(e) {
            if (document.body.scrollTop > 400) {
                var currScrollPos2 = document.body.scrollTop;
                document.getElementById('test').style.opacity = -currScrollPos2/400 + 2;
                }
            });