function animation(bat_one, bat_two){
    const images = [bat_one, bat_two];
    const observer = new IntersectionObserver(
        e => {
            e.forEach(elem => {
                switch (elem.target.id){
                    case 'bg_bat_img_one':
                        elem.target.classList.toggle('bat_one_animation', elem.isIntersecting);
                        break;
                    case 'bg_bat_img_two':
                        elem.target.classList.toggle('bat_two_animation', elem.isIntersecting);
                        break;
                }
            })
        },
        {
            threshold: .01,
        }
    )
    images.forEach((e) => {
        observer.observe(e);
    })
}
export default animation;