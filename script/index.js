


function initialize() {
    
    const Modal = element => {

        let modal = element;
        let triggers = [];

        const addTrigger = element => {
            const targets = element instanceof Array ? element : [element];

            targets.forEach( target => {
                triggers.push(target);
                target.addEventListener('click', toggleModal)
            })
        }
        

        const removeTriggers = () => {
            triggers.forEach( trigger => {
                trigger.removeEventListener('click', toggleModal)
            })
        }

        const toggleModal = () => {
            modal.classList.contains('is-active') ? closeModal() : openModal();
        }

        const closeModal = () => {
            modal.classList.remove('is-active');
            document.body.classList.remove('no-scroll')
            form_mail.reset();
            video_youtube.pause();
        }

        const openModal = () => {
            modal.classList.add('is-active');
            document.body.classList.add('no-scroll');
        }
          
        return {
            modal,
            addTrigger,
            removeTriggers,
            closeModal
        }
    };


    // Mail chimp
    const modal_mail_chimp = Modal(document.querySelector('#modal-mailchimp'));
    modal_mail_chimp.addTrigger([document.querySelector('.btn-join-js'), document.querySelector('#modal-mailchimp .modal__inner__close-js')]);

    // video
    const modal_video = Modal(document.querySelector('#modal-video'));
    modal_video.addTrigger([document.querySelector('.trailer_link-js'), document.querySelector('#modal-video .modal__inner__close-js')]);


    const Form = element => {

        let form = element;
        let success_message = form.querySelector('#mce-success-response');
        
        const onSubmit = e => {
            if (success_message.style.display ===  'none') return;
            reset();
        }

        const reset = () => {
            form.reset();
        }

        form.addEventListener('submit', onSubmit);

        return {
            form,
            reset
        }
    }

    const form_mail = Form(document.querySelector('#mc-embedded-subscribe-form'));


    // Add video controls
    const Controls = element => {
        const video = element;
        const src = video.src;

        const pause = () => {
            video.src = null; 
            video.src = src;
        }

        return {
            video,
            pause
        }
    }

    const video_youtube = Controls(document.querySelector('#yt-player'));

}




window.addEventListener('load', initialize)