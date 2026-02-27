import packageJson from '../../package.json';
const Footer = () => {
    return (
        <div className="fixed bottom-4 right-4 text-xs text-white font-mono select-none">
            v{packageJson.version}
        </div>
    )
}

export default Footer