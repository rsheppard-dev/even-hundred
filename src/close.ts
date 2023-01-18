const close = document.getElementById('close') as HTMLButtonElement;

const closeApp = (): void => {
	window.open('about:blank', '_self');
	window.close();
};

close.addEventListener('click', closeApp);

export {};
