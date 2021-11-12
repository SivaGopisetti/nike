/**
 * importing required necessary modules 
 */



import React, { Component } from 'react';
import  './Mainpagee.css';

/**
 * @description:Here mainpage contains all the html elements for the page to load the products.
 * @returns JSX elements
 */

class Mainpage extends Component {
	render() {
		return (
			 <>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>complete responsive ecommerce website design tutorial</title>
			{/* font awesome cdn link  */}
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
			/>
			{/* custom css file link  */}
			<link rel="stylesheet" href="css/style.css" />
			{/* header section starts  */}
			<header>
				<div id="menu-bar" className="fas fa-bars" />
				<a href="/" className="logo">
					nike
				</a>
				<nav className="navbar">
					<a href="/home">home</a>
					<a href="/products">products</a>
					<a href="/featured">featured</a>
					<a href="/review">review</a>
				</nav>
				<div className="icons">
					<a href="/" className="fas fa-heart" />
					<a href="/" className="fas fa-shopping-cart" />
					<a href="/" className="fas fa-user" />
				</div>
			</header>
			{/* header section ends */}
			{/* home section starts  */}
			<section className="home" id="home">
				<div className="slide-container active">
					<div className="slide">
						<div className="content">
							<span>nike red shoes</span>
							<h3>nike metcon shoes</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
								maiores et eos eaque veritatis aut laboriosam earum dolorem iste
								atque.
							</p>
							<a href="/" className="btn">
								add to cart
							</a>
						</div>
						<div className="image">
							<img src="images/home-shoe-1.png" className="shoe" alt />
							<img src="images/home-text-1.png" className="text" alt />
						</div>
					</div>
				</div>
				<div className="slide-container">
					<div className="slide">
						<div className="content">
							<span>nike blue shoes</span>
							<h3>nike metcon shoes</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
								maiores et eos eaque veritatis aut laboriosam earum dolorem iste
								atque.
							</p>
							<a href="/" className="btn">
								add to cart
							</a>
						</div>
						<div className="image">
							<img src="images/home-shoe-2.png" className="shoe" alt />
							<img src="images/home-text-2.png" className="text" alt />
						</div>
					</div>
				</div>
				<div className="slide-container">
					<div className="slide">
						<div className="content">
							<span>nike yellow shoes</span>
							<h3>nike metcon shoes</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
								maiores et eos eaque veritatis aut laboriosam earum dolorem iste
								atque.
							</p>
							<a href="/" className="btn">
								add to cart
							</a>
						</div>
						<div className="image">
							<img src="images/home-shoe-3.png" className="shoe" alt />
							<img src="images/home-text-3.png" className="text" alt />
						</div>
					</div>
				</div>
				<div id="prev" className="fas fa-chevron-left" onclick="prev()" />
				<div id="next" className="fas fa-chevron-right" onclick="next()" />
			</section>
			{/* home section ends */}
			{/* service section starts  */}
			<section className="service">
				<div className="box-container">
					<div className="box">
						<i className="fas fa-shipping-fast" />
						<h3>fast delivery</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
							fugit.
						</p>
					</div>
					<div className="box">
						<i className="fas fa-undo" />
						<h3>10 days replacements</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
							fugit.
						</p>
					</div>
					<div className="box">
						<i className="fas fa-headset" />
						<h3>24 x 7 support</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
							fugit.
						</p>
					</div>
				</div>
			</section>
			{/* service section ends */}
			{/* products section starts  */}
			<section className="products" id="products">
				<h1 className="heading">
					{" "}
					latest <span>products</span>{" "}
				</h1>
				<div className="box-container">
					<div className="box">
						<div className="icons">
							<a href="/" className="fas fa-heart" />
							<a href="/" className="fas fa-share" />
							<a href="/" className="fas fa-eye" />
						</div>
						<img src="images/product-1.png" alt />
						<div className="content">
							<h3>nike shoes</h3>
							<div className="price">
								$120.99 <span>$150.99</span>
							</div>
							<div className="stars">
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="far fa-star" />
							</div>
							<a href="/" className="btn">
								add to cart
							</a>
						</div>
					</div>
					<div className="box">
						<div className="icons">
							<a href="/" className="fas fa-heart" />
							<a href="/" className="fas fa-share" />
							<a href="/" className="fas fa-eye" />
						</div>
						<img src="images/product-2.png" alt />
						&lt;
						<div className="content">
							<h3>nike shoes</h3>
							<div className="price">
								$120.99 <span>$150.99</span>
							</div>
							<div className="stars">
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="far fa-star" />
							</div>
							<a href="/" className="btn">
								add to cart
							</a>
						</div>
					</div>
					<div className="box">
						<div className="icons">
							<a href="/" className="fas fa-heart" />
							<a href="/" className="fas fa-share" />
							<a href="/" className="fas fa-eye" />
						</div>
						<img src="images/product-3.png" alt />
						<div className="content">
							<h3>nike shoes</h3>
							<div className="price">
								$120.99 <span>$150.99</span>
							</div>
							<div className="stars">
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="far fa-star" />
							</div>
							<a href="/" className="btn">
								add to cart
							</a>
						</div>
					</div>
					<div className="box">
						<div className="icons">
							<a href="/" className="fas fa-heart" />
							<a href="/" className="fas fa-share" />
							<a href="/" className="fas fa-eye" />
						</div>
						<img src="images/product-4.png" alt />
						<div className="content">
							<h3>nike shoes</h3>
							<div className="price">
								$120.99 <span>$150.99</span>
							</div>
							<div className="stars">
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="far fa-star" />
							</div>
							<a href="/" className="btn">
								add to cart
							</a>
						</div>
					</div>
					<div className="box">
						<div className="icons">
							<a href="/" className="fas fa-heart" />
							<a href="/" className="fas fa-share" />
							<a href="/" className="fas fa-eye" />
						</div>
						<img src="images/product-5.png" alt />
						<div className="content">
							<h3>nike shoes</h3>
							<div className="price">
								$120.99 <span>$150.99</span>
							</div>
							<div className="stars">
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="far fa-star" />
							</div>
							<a href="/" className="btn">
								add to cart
							</a>
						</div>
					</div>
					<div className="box">
						<div className="icons">
							<a href="/" className="fas fa-heart" />
							<a href="/" className="fas fa-share" />
							<a href="/" className="fas fa-eye" />
						</div>
						<img src="images/product-6.png" alt />
						<div className="content">
							<h3>nike shoes</h3>
							<div className="price">
								$120.99 <span>$150.99</span>
							</div>
							<div className="stars">
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="far fa-star" />
							</div>
							<a href="/" className="btn">
								add to cart
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* products section ends */}
			{/* featured section starts  */}
			<section className="featured" id="featured">
				<h1 className="heading">
					{" "}
					<span>featured</span> products{" "}
				</h1>
				<div className="row">
					<div className="image-container">
						<div className="small-image">
							<img src="images/f-img-1.1.png" className="featured-image-1" alt />
							<img src="images/f-img-1.2.png" className="featured-image-1" alt />
							<img src="images/f-img-1.3.png" className="featured-image-1" alt />
							<img src="images/f-img-1.4.png" className="featured-image-1" alt />
						</div>
						<div className="big-image">
							<img src="images/f-img-1.1.png" className="big-image-1" alt />
						</div>
					</div>
					<div className="content">
						<h3>new nike airmax shoes</h3>
						<div className="stars">
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="far fa-star" />
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis
							praesentium odit voluptas illum iure libero quis fuga commodi. Autem.
						</p>
						<div className="price">
							$80.99 <span>$120.99</span>
						</div>
						<a href="/" className="btn">
							add to cart
						</a>
					</div>
				</div>
				<div className="row">
					<div className="image-container">
						<div className="small-image">
							<img src="images/f-img-2.1.png" className="featured-image-2" alt />
							<img src="images/f-img-2.2.png" className="featured-image-2" alt />
							<img src="images/f-img-2.3.png" className="featured-image-2" alt />
							<img src="images/f-img-2.4.png" className="featured-image-2" alt />
						</div>
						<div className="big-image">
							<img src="images/f-img-2.1.png" className="big-image-2" alt />
						</div>
					</div>
					<div className="content">
						<h3>new nike airmax shoes</h3>
						<div className="stars">
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="far fa-star" />
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis
							praesentium odit voluptas illum iure libero quis fuga commodi. Autem.
						</p>
						<div className="price">
							$80.99 <span>$120.99</span>
						</div>
						<a href="/" className="btn">
							add to cart
						</a>
					</div>
				</div>
				<div className="row">
					<div className="image-container">
						<div className="small-image">
							<img src="images/f-img-3.1.png" className="featured-image-3" alt />
							<img src="images/f-img-3.2.png" className="featured-image-3" alt />
							<img src="images/f-img-3.3.png" className="featured-image-3" alt />
							<img src="images/f-img-3.4.png" className="featured-image-3" alt />
						</div>
						<div className="big-image">
							<img src="images/f-img-3.1.png" className="big-image-3" alt />
						</div>
					</div>
					<div className="content">
						<h3>new nike airmax shoes</h3>
						<div className="stars">
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="far fa-star" />
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis
							praesentium odit voluptas illum iure libero quis fuga commodi. Autem.
						</p>
						<div className="price">
							$80.99 <span>$120.99</span>
						</div>
						<a href="/" className="btn">
							add to cart
						</a>
					</div>
				</div>
			</section>
			{/* featured section ends */}
			{/* review section starts  */}
			<section className="review" id="review">
				<h1 className="heading">
					{" "}
					customer's <span>review</span>{" "}
				</h1>
				<div className="box-container">
					<div className="box">
						<img src="images/pic1.png" alt />
						<h3>john deo</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos
							eum. Laborum aut a consequatur ducimus, molestias possimus quisquam
							rerum temporibus ipsum voluptate accusamus, unde ab asperiores?
							Exercitationem, unde rem.
						</p>
						<div className="stars">
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="far fa-star" />
						</div>
					</div>
					<div className="box">
						<img src="images/pic2.png" alt />
						<h3>john deo</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos
							eum. Laborum aut a consequatur ducimus, molestias possimus quisquam
							rerum temporibus ipsum voluptate accusamus, unde ab asperiores?
							Exercitationem, unde rem.
						</p>
						<div className="stars">
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star-half-alt" />
						</div>
					</div>
					<div className="box">
						<img src="images/pic3.png" alt />
						<h3>john deo</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quos
							eum. Laborum aut a consequatur ducimus, molestias possimus quisquam
							rerum temporibus ipsum voluptate accusamus, unde ab asperiores?
							Exercitationem, unde rem.
						</p>
						<div className="stars">
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
							<i className="fas fa-star" />
						</div>
					</div>
				</div>
			</section>
			{/* review section ends */}
			{/* newsletter section starts  */}
			<section className="newsletter">
				<div className="content">
					<h3>monthly newsletter</h3>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ullam
						veniam at itaque culpa hic corporis saepe dicta doloremque nihil.
					</p>
					<form action>
						<input type="email" placeholder="enter your email" className="box" />
						<input type="submit" defaultValue="send" className="btn" />
					</form>
				</div>
			</section>
			{/* newsletter section ends */}
			{/* footer section  */}
			<section className="footer">
				<div className="box-container">
					<div className="box">
						<h3>our stores</h3>
						<a href="/">india</a>
						<a href="/">USA</a>
						<a href="/">japan</a>
						<a href="/">paris</a>
					</div>
					<div className="box">
						<h3>quick links</h3>
						<a href="/">home</a>
						<a href="/">products</a>
						<a href="/">featured</a>
						<a href="/">review</a>
					</div>
					<div className="box">
						<h3>extra links</h3>
						<a href="/">my account</a>
						<a href="/">my favorite</a>
						<a href="/">my orders</a>
						<a href="/">newsletter</a>
					</div>
					<div className="box">
						<h3>follow us</h3>
						<a href="/">facebook</a>
						<a href="/">twitter</a>
						<a href="/">instagram</a>
						<a href="/">linkedin</a>
					</div>
				
				</div>
			</section>
		</>




		
		);
	}
}

export default Mainpage;   // export default components and using in app.js
