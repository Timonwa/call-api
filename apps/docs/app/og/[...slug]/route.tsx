// import { readFileSync } from "node:fs";
// import { generateOGImage } from "@/app/og/[...slug]/og";
// import { metadataImage } from "@/lib/metadata-image";
// import type { ImageResponse } from "next/og";

// const font = readFileSync("./app/og/[...slug]/Geist-Regular.ttf");
// const fontBold = readFileSync("./app/og/[...slug]/Geist-Bold.ttf");

// // export const GET = metadataImage.createAPI((page): ImageResponse => {
// // 	// return generateOGImage({
// // 	// 	description: page.data.description,
// // 	// 	fonts: [
// // 	// 		{
// // 	// 			data: font,
// // 	// 			name: "Geist",
// // 	// 			weight: 400,
// // 	// 		},
// // 	// 		{
// // 	// 			data: fontBold,
// // 	// 			name: "Geist",
// // 	// 			weight: 600,
// // 	// 		},
// // 	// 	],
// // 	// 	icon: (
// // 	// 		<svg
// // 	// 			xmlns="http://www.w3.org/2000/svg"
// // 	// 			width="120"
// // 	// 			height="120"
// // 	// 			viewBox="0 0 24 24"
// // 	// 			stroke="url(#test)"
// // 	// 			style={{
// // 	// 				marginLeft: "-4px",
// // 	// 			}}
// // 	// 			strokeWidth="1"
// // 	// 			strokeLinecap="round"
// // 	// 			fill="rgb(0,0,0,0.8)"
// // 	// 			strokeLinejoin="round"
// // 	// 		>
// // 	// 			<linearGradient id="test" x1="0" y1="0" x2="0" y2="1">
// // 	// 				<stop stopColor="white" />
// // 	// 				<stop stopColor="rgb(100,100,100)" offset="100%" />
// // 	// 			</linearGradient>
// // 	// 			<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
// // 	// 			<polyline points="11 3 11 11 14 8 17 11 17 3" />
// // 	// 		</svg>
// // 	// 	),
// // 	// 	primaryColor: "rgba(65,65,84,0.9)",
// // 	// 	primaryTextColor: "rgb(240,240,240)",
// // 	// 	site: "CallApi",
// // 	// 	title: page.data.title,
// // 	// });
// // });

// // export function generateStaticParams(): Array<{
// // 	slug: string[];
// // }> {
// // 	return metadataImage.generateParams();
// // }
// eslint-disable-next-line unicorn/no-empty-file -- Allow
