class IdeaList {
	constructor() {
		this._ideaListEl = document.getElementById('idea-list');
		this._idea = [
			{
				id: 1,
				text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
				tag: 'Technology',
				username: 'TonyStark',
				date: '2022-01-02',
			},
			{
				id: 2,
				text: 'Milk cartons that turn a different color the older that your milk is getting',
				tag: 'Inventions',
				username: 'SteveRogers',
				date: '2022-01-02',
			},
			{
				id: 3,
				text: 'A mobile app that connects local farmers directly with consumers for fresh produce delivery',
				tag: 'Business',
				username: 'NatashaRomanoff',
				date: '2022-01-03',
			},
			{
				id: 4,
				text: 'Smart water bottles that remind you to stay hydrated and track your daily water intake',
				tag: 'Health',
				username: 'BruceBanner',
				date: '2022-01-04',
			},
		];
		this._validTags = new Set();
		this._validTags.add('technology');
		this._validTags.add('software');
		this._validTags.add('business');
		this._validTags.add('education');
		this._validTags.add('health');
		this._validTags.add('inventions');
	}

	getClassTag(tag) {
		tag = tag.toLowerCase();
		let tagClass = '';
		if (this._validTags.has(tag)) {
			tagClass = `tag-${tag}`;
		} else {
			tagClass = '';
		}
		return tagClass;
	}

	render() {
		this._ideaListEl.innerHTML = this._idea
			.map((idea) => {
				const tagClass = this.getClassTag(idea.tag);
				return `
        <div class="card">
					<button class="delete"><i class="fas fa-times"></i></button>
					<h3>
${idea.text}
					</h3>
					<p class="tag ${tagClass}">${idea.tag.toUpperCase()}</p>
					<p>
						Posted on <span class="date">${idea.date}</span> by
						<span class="author">${idea.username}</span>
					</p>
				</div>`;
			})
			.join('');
	}
}

export default IdeaList;
