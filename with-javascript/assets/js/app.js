// Obtén una referencia al contenedor de productos y los botones
const productContainer	=	document.getElementById("productsList");
const addButton			=	document.getElementById("addProduct");
const removeButton		=	document.getElementById("removeProduct");
const imagePaths		=	[
	"assets/img/product-img-blue",
	"assets/img/product-img-green",
	"assets/img/product-img-yellow",
	"assets/img/product-img-violet",
];

function getRandomImage() {
	const randomIndex = Math.floor(Math.random() * imagePaths.length);
	return imagePaths[randomIndex];
}

function addProductCard() {
	const randomImage = getRandomImage();
	const productCardTemplate = `
	<article class="p-7 border-[3px] border-black productItem">
		<header class="flex flex-col items-center sm:items-start">
			<picture>
				<source type="image/webp" srcset="${randomImage}.webp">
				<img itemprop="image" src="${randomImage}.png" alt="Image of Tourmaline & Eucalyptus Bar Soap" class="mb-7">
			</picture>
			<h2 class="pb-7 font-bold text-xl leading-tight">Tourmaline & Eucalyptus Bar Soap</h2>
			<div class="flex flex-column items-center pb-5">
				<div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
					<meta property="priceCurrency" content="USD">
					<span itemprop="price" class="font-bold text-xl" content="12.00">$12.00</span>
				</div>
				<input class="border border-gray-400 w-12 text-center ml-2" type="number" min="1" value="1" aria-label="Quantity">
			</div>
		</header>
		<div class="py-4">
			<p class="text-[#787677] text-sm text-center sm:text-left">Recarge your skin with the super energizing power of finely crusched tourmaline powder blended with natural complexion</p>
		</div>
		<footer class="flex flex-col items-center pt-2">
			<button type="button" class="border-2 border-black text-lg bg-purple-100 hover:bg-purple-300 transition-colors py-2 px-5 mb-3">Add to cart</button>
			<a href="#" class="underline hover:no-underline mb-4 text-lg">Learn More</a>
		</footer>
	</article>
	`;
	document.getElementById("emptyMsg").classList.add('hidden');
	productContainer.insertAdjacentHTML('beforeend', productCardTemplate);
}

function removeProductCard() {
	const productCards = productContainer.querySelectorAll(".productItem");
	if (productCards.length > 0) {
		const lastProductCard = productCards[productCards.length - 1];
		productContainer.removeChild(lastProductCard);

		if(productCards.length == 1) {
			const emptyMsg = document.getElementById("emptyMsg");
			emptyMsg.classList.remove('hidden');
		}
	}
}

addButton.addEventListener("click", addProductCard);
removeButton.addEventListener("click", removeProductCard);
