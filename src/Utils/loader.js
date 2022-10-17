import React from "react"
import ContentLoader from "react-content-loader"
export const MyLoaderHome = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#b8b8b8"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="-6" y="100" rx="3" ry="3" width="267" height="20" />
        <rect x="-5" y="60" rx="3" ry="3" width="185" height="20" />
        <rect x="-8" y="-27" rx="3" ry="3" width="167" height="26" />
        <rect x="-6" y="140" rx="3" ry="3" width="186" height="20" />
        <rect x="-29" y="40" rx="3" ry="3" width="385" height="2" />
        <rect x="-2" y="9" rx="3" ry="3" width="360" height="27" />
    </ContentLoader>
        )

export const  ThreeDots = props => (
    <ContentLoader
        viewBox="0 0 400 160"
        height={160}
        width={400}
        backgroundColor="transparent"
        {...props}
    >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
    </ContentLoader>
)

ThreeDots.metadata = {
    name: 'RioF',
    github: 'clariokids',
    description: 'Three Dots',
    filename: 'ThreeDots',
}

export default ThreeDots

