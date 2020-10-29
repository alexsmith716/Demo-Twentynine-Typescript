import { createGlobalStyle, css } from 'styled-components';
import { colors } from './Colors';

const bodyTheme = css`
	color: ${(props): string => props.theme.textColor};
	background-color: ${(props): string => props.theme.backgroundColor};
`;

const spinnerTheme = css`
	border: 0.25em solid ${(props): string => props.theme.spinnerColor};
`;

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		padding-top: 56px;
		margin: 0;
		font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
		font-size: 16px;
		font-weight: 400;
		line-height: 1.5;
		text-align: left;
		${bodyTheme}
	}

	hr {
		box-sizing: content-box;
		height: 0;
		overflow: visible;
	}

	img {
		vertical-align: middle;
		border-style: none;
	}

	p {
		margin-top: 0;
		margin-bottom: 1rem;
	}

	// ========================================

	.container {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
	}

	@media (min-width: 576px) {
		.container {
			max-width: 540px;
		}
	}

	@media (min-width: 768px) {
		.container {
			max-width: 720px;
		}
	}

	@media (min-width: 993px) {
		.container {
			max-width: 960px;
		}
	}

	@media (min-width: 1201px) {
		.container {
			max-width: 1140px;
		}
	}

	// ========================================

	.row-grid {
		display: grid;
		margin-right: -15px;
		margin-left: -15px;
	}

	.grid-two {
		grid-template-columns: repeat(6, 1fr);
	}

	.grid-six {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 992px) {
		.grid-two {
			grid-template-columns: 1fr;
		}
		.grid-six {
			grid-template-columns: 1fr;
		}
	}

	.col-grid {
		position: relative;
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
	}

	// ========================================

	.row-flex {
		display: flex;
		flex-wrap: wrap;
		margin-right: -15px;
		margin-left: -15px;
	}

	@media screen and (max-width: 992px) {
		.row-flex {
			display: inline-block;
		}
	}

	// ========================================

	.cardContainerGrid {
		display: grid;
		grid-template-columns: repeat(3, auto);
		grid-gap: 1.5rem;
	}

	@media screen and (max-width: 992px) {
		.cardContainerGrid {
			grid-template-columns: 1fr;
		}
	}

	// ========================================

	.flex-column-center {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.flex-row-center {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.container-padding-border-radius-1 {
		padding: 10px 10px;
		border: 1px solid #090;
		border-radius: 3px;
	}

	.container-padding-border-radius-2 {
		padding: 10px 10px;
		border: 2px solid #b0c4de;
		border-radius: 3px;
	}

	// ========================================

	.h-100 {
		height: 100%;
	}

	.text-center {
		text-align: center;
	}

	.img-fluid {
		max-width: 100%;
		height: auto;
	}

	.rounded {
		border-radius: 0.25rem;
	}

	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		min-width: 0;
		word-wrap: break-word;
		background-color: #fff;
		background-clip: border-box;
		border: 1px solid rgba(0, 0, 0, 0.125);
		border-radius: 0.25rem;
	}

	.card {
		word-wrap: break-word;
	}

	.card-body {
		// flex: 1 1 auto;
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: auto;
		min-height: 1px;
		padding: 1.25rem;
	}

	.card-footer {
		border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
		padding: 0.75rem 1.25rem;
		background-color: rgba(0, 0, 0, 0.03);
		border-top: 1px solid rgba(0, 0, 0, 0.125);
	}

	// ========================================

	.col-one, .col-two, .col-three, .col-four, .col-five, .col-six, .col-seven, .col-eight, .col-nine, .col-ten, .col-eleven, .col-twelve {
		position: relative;
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
	}

	.col-one {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 8.3333%;
		max-width: 8.333333%;
	}

	.col-two {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 16.666667%;
		max-width: 16.666667%;
	}

	.col-three {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 25%;
		max-width: 25%;
	}

	.col-four {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 33.3333%;
		max-width: 33.333333%;
	}

	.col-five {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 41.666667%;
		max-width: 41.666667%;
	}

	.col-six {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 50%;
		max-width: 50%;
	}

	.col-seven {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 58.3333%;
		max-width: 58.333333%;
	}

	.col-eight {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 66.666667%;
		max-width: 66.666667%;
	}

	.col-nine {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 75%;
		max-width: 75%;
	}

	.col-ten {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 83.3333%;
		max-width: 83.333333%;
	}

	.col-eleven {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 91.666667%;
		max-width: 91.666667%;
	}

	.col-twelve {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 100%;
		max-width: 100%;
	}

	@media screen and (max-width: 992px) {
		.col-one, .col-two, .col-three, .col-four, .col-five, .col-six, .col-seven, .col-eight, .col-nine, .col-ten, .col-eleven, .col-twelve {
			max-width: 100%;
		}
	}

	// ========================================

	.mt-2 {
		margin-top: 0.75rem;
	}

	.mt-3 {
		margin-top: 1rem;
	}

	.mt-4 {
		margin-top: 1.5rem;
	}

	.mt-5 {
		margin-top: 3rem;
	}

	.mb-3 {
		margin-bottom: 1rem;;
	}

	.mb-4 {
		margin-bottom: 1.5rem;;
	}

	.mb-5 {
		margin-bottom: 3rem;;
	}

	.m-2 {
		margin: 0.75rem;
	}

	.m-2 {
		margin: 0.75rem;
	}

	.m-3 {
		margin: 1rem;
	}

	.m-4 {
		margin-bottom: 1.5rem;
	}

	.m-5 {
		margin-bottom: 3rem;
	}

	// ========================================

	.pt-2 {
		padding-top: 0.75rem;
	}

	.pt-3 {
		padding-top: 1rem;
	}

	.pt-4 {
		padding-top: 1.5rem;
	}

	.pt-5 {
		padding-top: 3rem;
	}

	.pb-2 {
		padding-bottom: 0.75rem;;
	}

	.pb-3 {
		padding-bottom: 1rem;;
	}

	.pb-4 {
		padding-bottom: 1.5rem;;
	}

	.pb-5 {
		padding-bottom: 3rem;;
	}

	.p-2 {
		padding: 0.75rem;
	}

	.p-3 {
		padding: 1rem;
	}

	.p-4 {
		padding: 1.5rem;
	}

	.p-5 {
		padding: 3rem;
	}

	// ========================================

	.btn {
		display: inline-block;
		font-weight: 400;
		color: #212529;
		text-align: center;
		vertical-align: middle;
		user-select: none;
		background-color: transparent;
		border: 1px solid transparent;
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		line-height: 1.5;
		border-radius: 0.25rem;
		cursor: pointer;
	}

	.btn-primary {
		color: #fff;
		background-color: #0d6efd;
	}

	.btn-secondary {
		color: #fff;
		background-color: #6c757d;
	}

	.btn-success {
		color: #fff;
		background-color: #198754;
	}

	.btn-danger {
		color: #fff;
		background-color: #dc3545;
	}

	.btn-warning {
		color: #fff;
		background-color: #ffc107;
	}

	.btn-info {
		color: #fff;
		background-color: #0dcaf0;
	}

	// ========================================

	.text-break {
		word-wrap: break-word;
	}

	// ========================================

	.container-padding-border-radius-2 {
		padding: 10px 10px;
		border: 2px solid #b0c4de;
		border-radius: 3px;
	}

	// ========================================

	.spinner-progress {
		pointer-events: none;
		position: absolute;
		z-index: 9999;
		top: 11px;
		right: 6px;
	}

	@keyframes spinner {
		to { transform: rotate(360deg); }
	}

	.spinner {
		position: fixed;
		display: inline-block;
		width: 2rem;
		height: 2rem;
		vertical-align: text-bottom;
		${spinnerTheme}
		border-right-color: transparent;
		border-radius: 50%;
		animation: spinner .75s linear infinite;
	}

	.spinner-sm {
		width: 1rem;
		height: 1rem;
		border-width: .2em;
	}

	// ========================================

	.bg-lightskyblue-1 {
		background-color: #b0e2ff;
	}

	.bg-lavender {
		background-color: #e6e6fa;
	}

	.bg-syracuse-orange {
		background-color: ${colors.rutgersScarlet};
	}

	.bg-rutgers-scarlet {
		background-color: ${colors.rutgersScarlet};
	}

	.bg-color-ivory {
		background-color: #fffff0;
	}

	.bg-color-yellow {
		background-color: #ff0;
	}

	.bg-color-purple {
		background-color: #9b30ff;
	}

	.bg-color-slategray {
		background-color: #708090;
	}

	.bg-color-olivedrab-2 {
		background-color: #b3ee3a;
	}

	.bg-color-mediumorchid-1 {
		background-color: #e066ff;
	}

	.bg-color-turquoise-1 {
		background-color: #00f5ff;
	}

	.bg-color-darkgoldenrod-1 {
		background-color: #ffb90f;
	}

	.bg-color-lightcoral {
		background-color: #f08080;
	}

	.bg-color-mediumspringgreen {
		background-color: #00fa9a;
	}

	.bg-color-plum {
		background-color: #dda0dd;
	}

	.bg-color-banana {
		background-color: #e3cf57;
	}

	.bg-color-cadetblue {
		background-color: #8ee5ee;
	}
`;
