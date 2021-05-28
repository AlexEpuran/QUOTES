let quotesBody = document.querySelector('.quotes-body-container');
let authorBody = document.querySelector('.author-body-container');
let tableBody = document.querySelector('.tb-body');
const searchBox = document.querySelector('.search');
const firstPage = document.querySelector('#first');
const nextPage = document.querySelector('#next');
const previousPage = document.querySelector('#previous');
const lastPage = document.querySelector('#last');

let quotes = [];
let page = 0;

//SEARCH

const search = () => {
	let filter = document.getElementById('search').value.toUpperCase();
	let container = document.querySelector('.quotes-body-container');
	let content = container.querySelectorAll('div');
	console.log('~ content', content);

	for (let i = 0; i < content.length; i++) {
		let quot = content[i];
		console.log('~ a', quot);

		if (quot.innerHTML.toUpperCase().indexOf(filter) > -1) {
			content[i].style.display = '';
		} else {
			content[i].style.display = 'none';
		}
	}
};

searchBox.addEventListener('keyup', search);

//GET DATA FROM API

const getQuotes = async () => {
	const url = 'https://type.fit/api/quotes';
	try {
		let response = await fetch(url);
		quotes = await response.json();
	} catch (error) {
		//
	}
	displayQuotes();
};

//DISPLAY DATA

const displayQuotes = () => {
	for (let i = 0; i < page + 50; i++) {
		let quote = quotes[i];
		let div = document.createElement('div');
		let p1 = document.createElement('p');
		let span = document.createElement('span');
		div.classList.add('flex');
		
		if (quote.text.length > 100) {
			p1.classList.add('long-quote');
		} else {
			p1.classList.remove('long-quote');
		}
		p1.textContent = '-' + quote.text + '-';
		quotesBody.appendChild(div);
		div.appendChild(p1);
		div.appendChild(span);

		if (!quote.author) {
			span.textContent = 'Unknown';
		} else {
			span.textContent = ',,' + quote.author + '"';
		}
	}
};

getQuotes();

//PAGINATION

nextPage.addEventListener('click', () => {
	page == quotes.length - 50 ? (page = 0) : (page += 50);
	quotesBody.innerHTML = '';

	for (let i = page; i < page + 10; i++) {
		let quote = quotes[i];
		let div = document.createElement('div');
		let p1 = document.createElement('p');
		let span = document.createElement('span');
		div.classList.add('flex');
		
		if (quote.text.length > 100) {
			p1.classList.add('long-quote');
		} else if (quote.text.length > 145) {
			p1.classList.add('long-quote-long');
		} else if (quote.text.length < 145) {
			p1.classList.remove('long-quote-long');
		} else if (quote.text.length < 100) {
			p1.classList.remove('long-quote');
		}
		p1.textContent = '-' + quote.text + '-';
		quotesBody.appendChild(div);
		div.appendChild(p1);
		div.appendChild(span);

		if (!quote.author) {
			span.textContent = 'Unknown';
		} else {
			span.textContent = ',,' + quote.author + '"';
		}
	}
});

previousPage.addEventListener('click', () => {
	page == 0 ? (page = quotes.length - 50) : (page -= 50);
	quotesBody.innerHTML = '';
	for (let i = page; i < page + 10; i++) {
		let quote = quotes[i];
		let div = document.createElement('div');
		let p1 = document.createElement('p');
		let span = document.createElement('span');
		div.classList.add('flex');
		
		if (quote.text.length > 100) {
			p1.classList.add('long-quote');
		} else if (quote.text.length > 145) {
			p1.classList.add('long-quote-long');
		} else if (quote.text.length < 145) {
			p1.classList.remove('long-quote-long');
		} else if (quote.text.length < 100) {
			p1.classList.remove('long-quote');
		}
		p1.textContent = '-' + quote.text + '-';
		quotesBody.appendChild(div);
		div.appendChild(p1);
		div.appendChild(span);

		if (!quote.author) {
			span.textContent = 'Unknown';
		} else {
			span.textContent = ',,' + quote.author + '"';
		}
	}
});

firstPage.addEventListener('click', () => {
	page = 0;
	quotesBody.innerHTML = '';
	for (let i = page; i < page + 50; i++) {
		let quote = quotes[i];
		let div = document.createElement('div');
		let p1 = document.createElement('p');
		let span = document.createElement('span');
		div.classList.add('flex');
		
		if (quote.text.length > 100) {
			p1.classList.add('long-quote');
		} else if (quote.text.length > 145) {
			p1.classList.add('long-quote-long');
		} else if (quote.text.length < 145) {
			p1.classList.remove('long-quote-long');
		} else if (quote.text.length < 100) {
			p1.classList.remove('long-quote');
		}
		p1.textContent = '-' + quote.text + '-';
		quotesBody.appendChild(div);
		div.appendChild(p1);
		div.appendChild(span);

		if (!quote.author) {
			span.textContent = 'Unknown';
		} else {
			span.textContent = ',,' + quote.author + '"';
		}
	}
});

lastPage.addEventListener('click', () => {
	page = quotes.length - 50;
	quotesBody.innerHTML = '';
	for (let i = page; i < page + 10; i++) {
		let quote = quotes[i];
		let div = document.createElement('div');
		let p1 = document.createElement('p');
		let span = document.createElement('span');
		div.classList.add('flex');
		
		if (quote.text.length > 100) {
			p1.classList.add('long-quote');
		} else if (quote.text.length > 145) {
			p1.classList.add('long-quote-long');
		} else if (quote.text.length < 145) {
			p1.classList.remove('long-quote-long');
		} else if (quote.text.length < 100) {
			p1.classList.remove('long-quote');
		}
		p1.textContent = '-' + quote.text + '-';
		quotesBody.appendChild(div);
		div.appendChild(p1);
		div.appendChild(span);

		if (!quote.author) {
			span.textContent = 'Unknown';
		} else {
			span.textContent = ',,' + quote.author + '"';
		}
	}
});
