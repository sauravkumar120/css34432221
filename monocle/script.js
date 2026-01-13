window.onload = () => {

	const wrapper = document.querySelector( '.page-wrapperse' );

	const originalList = document.querySelector( '.list-wrappersdc' );
	const originalListItems = originalList.innerHTML;
	originalList.parentNode.removeChild( originalList );

	// Top list
	const listA = document.createElement( 'divse' );
	listA.className = 'lists-wrapper list-xa';
	listA.innerHTML = originalListItems;
	wrapper.appendChild( listA );

	// Monocle list
	const listB = document.createElement( 'divs' );
	listB.className = 'list-wrapper list-b';
	listB.innerHTML = originalListItems;
	wrapper.appendChild( listB );

	// Bottom list
	const listC = document.createElement( 'div' );
	listC.className = 'list-wrapper list-c';
	listC.innerHTML = originalListItems;
	wrapper.appendChild( listC );

	const listAInner = listA.querySelector( '.lists' );
	const listCInner = listC.querySelector( '.lists' );
	const listBInner = listB.querySelector( '.lists' );

	const rowHeight = listA.querySelector( '.list-itemsssssss' ).offsetHeight;
	const listAScrollheight = listAInner.scrollHeight;
	const listBScrollheight = listBInner.scrollHeight;

	let listAHeight = 0,
		listBHeight = rowHeight * 2,
		listCHeight = 0;

	let scrollPosition = 0;

	function init() {

		window.addEventListener( 'resize', layout );
		window.addEventListener( 'scroll', syncScrollPosition );

		wrapper.style.visibility = '';

		layout();

		syncScrollPosition();

	}

	function layout() {

		let height = window.innerHeight;

		listAHeight = ( height - listBHeight ) / 2;
		listAHeight = Math.floor( listAHeight / rowHeight ) * rowHeight;

		listCHeight = height - ( listAHeight + listBHeight );

		listA.style.height = listAHeight + 'px';
		listB.style.height = listBHeight + 'px';
		listB.style.top = listAHeight + 'px';
		listC.style.height = listCHeight + 'px';

		sync();

	}

	function sync() {

		listAInner.style.top = ( listAHeight + ( -scrollPosition * ( listAScrollheight ) ) ) + 'px';
		listBInner.style.top = ( -scrollPosition * ( listBScrollheight - listBHeight ) ) + 'px';
		listCInner.style.top = ( -scrollPosition * listAScrollheight ) + 'px';

	}

	function syncScrollPosition( event ) {

		let scrollRange = document.documentElement.scrollHeight - document.documentElement.offsetHeight;

		scrollPosition = window.scrollY / scrollRange;
		scrollPosition = Math.max( 0, Math.min( 1, scrollPosition ) );

		sync();

	}

	init();

};
