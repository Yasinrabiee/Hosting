const worksContent = {
	props: ["header", "paragraph"],
	template: `
		<div class="works__content__item">
		    <h4 class="item-header">{{ header }}</h4>
		    <p class="item-text">
		        {{ paragraph }}
		    </p>
		</div>
	`,
}

const comment = {
	props: ["img", "name", "comment"],
	template: `
		<div class="comment">
		    <div class="box-comments__body">
		        <p class="box-comments__content">{{ comment }}</p>
		    </div>
		    <div class="box-comments__info">
		        <img :src="img" alt="img info" class="box-comments__img">
		        <p class="box-comments__name">{{ name }}</p>
		    </div>
		</div>
	`,
}

new Vue({
	el: ".box-comments",
	components: {
		comment
	}
});
new Vue({
	el: ".works__content",
	components: {
		worksContent
	}
});
