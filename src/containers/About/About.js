import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../components/Button';
import * as Styles from './styles';

const About = () => {
	const aboutImageMain = require('../../assets/images/about-750-450.png');
	const aboutImageOurCustomers = require('../../assets/images/about-500-300.png');

	const [toggleCustomerState, setToggleCustomerState] = useState(true);

	useEffect(() => {
		//	componentDidMount
		console.log('>>>>>>>>>>>>>>>>>>>>>>>> About > useEffect() > componentDidMount');

		//	componentDidUpdate
		if (toggleCustomerState) {
			console.log(
				'>>>>>>>>>>>>>>>>>>>>>>>> About > useEffect() > componentDidUpdate > toggleCustomerState: ',
				toggleCustomerState,
			);
		}

		//	componentWillUnmount
		return () => {
			//	some effects might require cleanup
			console.log(
				'>>>>>>>>>>>>>>>>>>>>>>>> About > useEffect() > componentWillUnmount > cleanup phase',
			);
		};
	}, [toggleCustomerState]);

	return (
		<>
			<Helmet title="About Us" />

			{/* ---------------------------------------------- */}

			<div className="container">
				{/* ---------------------------------------------- */}

				<h1 className="mt-4 mb-3">About</h1>

				{/* ---------------------------------------------- */}

				<div className="row-grid grid-six bg-lightskyblue-1 mb-5">
					<div className="col-grid mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-grid">
						<h2>About Election App 2020</h2>
						<h4>This component utilizes the CSS Grid Layout module.</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum
							consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus
							reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
					</div>
				</div>

				{/* ---------------------------------------------- */}

				<div className="row-grid grid-two bg-color-cadetblue mb-5">
					<div className="col-grid mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-grid mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-grid mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-grid mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-grid mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-grid mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-grid mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-grid mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>
				</div>

				{/* ---------------------------------------------- */}

				<div className="row-grid grid-two bg-color-cadetblue mb-5">
					<div className="col-grid mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-grid">
						<h2>About Election App 2020</h2>
						<h4>This component utilizes the CSS Grid Layout module.</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum
							consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus
							reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
					</div>

					<div className="col-grid">
						<h2>About Election App 2020</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
					</div>

					<div className="col-grid">
						<h2>About Election App 2020</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
					</div>

					<div className="col-grid">
						<h2>About Election App 2020</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
					</div>

					<div className="col-grid">
						<h2>About Election App 2020</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
					</div>

					<div className="col-grid">
						<h2>About Election App 2020xX</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
					</div>
				</div>

				{/* ---------------------------------------------- */}

				<div className="row-flex bg-color-banana mb-5">
					<div className="col-two mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-two mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-two mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-two mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-two mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-two mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-two mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>
				</div>

				{/* ---------------------------------------------- */}

				<div className="row-flex bg-color-banana mb-5">
					<div className="col-two mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-two">
						<h2>About Election App 2020</h2>
						<h4>This component utilizes the CSS Flexible Box Layout module.</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum
							consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus
							reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
					</div>

					<div className="col-two">
						<h2>About Election App 2020</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
					</div>

					<div className="col-two">
						<h2>About Election App 2020</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
					</div>

					<div className="col-two">
						<h2>About Election App 2020</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
					</div>

					<div className="col-two">
						<h2>About Election App 2020</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
					</div>

					<div className="col-two">
						<h2>About Election App 2020yY</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
					</div>
				</div>

				{/* ---------------------------------------------- */}

				<div className="row-flex bg-color-plum mb-5">
					<div className="col-four mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-four">
						<h2>About Election App 2020</h2>
						<h4>This component utilizes the CSS Flexible Box Layout module.</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum
							consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus
							reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
					</div>

					<div className="col-four">
						<h2>About Election App 2020</h2>
						<h4>This component utilizes the CSS Flexible Box Layout module.</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
					</div>
				</div>

				{/* ---------------------------------------------- */}

				<div className="row-flex bg-color-olivedrab-2 mb-5">
					<div className="col-six mb-4">
						<img className="img-fluid rounded" src={aboutImageMain} alt="" />
					</div>

					<div className="col-six">
						<h2>About Election App 2020</h2>
						<h4>This component utilizes the CSS Flexible Box Layout module.</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum
							consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus
							reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam
							vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem
							corporis eveniet. Odit, temporibus reprehenderit dolorum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi
							mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam?
							Aut, in eum facere corrupti necessitatibus perspiciatis quis?
						</p>
					</div>
				</div>

				{/* ---------------------------------------------- */}

				<div className={`cardContainerGrid mb-5`}>
					<div className="container-padding-border-radius-2">
						<div>
							<h4>Card Title 1</h4>
							<div>
								<p>
									Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
									cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
									sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed
									odio dui.
								</p>
							</div>
							<div>
								<a href="#">More Info</a>
							</div>
						</div>
					</div>

					<div className="container-padding-border-radius-2">
						<div>
							<h4>Card Title 2</h4>
							<div>
								<p>
									Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
									cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
									sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed
									odio dui.
								</p>
							</div>
							<div>
								<a href="#">More Info</a>
							</div>
						</div>
					</div>

					<div className="container-padding-border-radius-2">
						<div>
							<h4>Card Title 3</h4>
							<div>
								<p>
									Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac
									cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
									sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed
									odio dui.
								</p>
							</div>
							<div>
								<a href="#">More Info</a>
							</div>
						</div>
					</div>
				</div>

				{/* ---------------------------------------------- */}

				<h2 className="color-salmon mb-3">
					Demo Component State By Toggling Our Customers!
				</h2>

				<div className={`${toggleCustomerState ? 'mb-4' : 'mb-5'}`}>
					<Button
						type="button"
						className={`btn-${toggleCustomerState ? 'success' : 'warning'}`}
						onClick={() => setToggleCustomerState(!toggleCustomerState)}
					>
						{toggleCustomerState
							? "They're All Here!"
							: "Now they're Gone! But just make sure they always keep coming back!"}
					</Button>
				</div>

				{toggleCustomerState && (
					<div className="row-flex mb-5">
						<div className="col-two mb-4">
							<img className="img-fluid rounded" src={aboutImageOurCustomers} alt="" />
						</div>

						<div className="col-two mb-4">
							<img className="img-fluid rounded" src={aboutImageOurCustomers} alt="" />
						</div>

						<div className="col-two mb-4">
							<img className="img-fluid rounded" src={aboutImageOurCustomers} alt="" />
						</div>

						<div className="col-two mb-4">
							<img className="img-fluid rounded" src={aboutImageOurCustomers} alt="" />
						</div>

						<div className="col-two mb-4">
							<img className="img-fluid rounded" src={aboutImageOurCustomers} alt="" />
						</div>

						<div className="col-two mb-4">
							<img className="img-fluid rounded" src={aboutImageOurCustomers} alt="" />
						</div>

						<div className="col-two mb-4">
							<img className="img-fluid rounded" src={aboutImageOurCustomers} alt="" />
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default About;
