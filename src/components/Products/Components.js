class ProductCatalog extends React.Component {
    renderTile = () => {
        return <ProductTile></ProductTile>;
    }

    render() {
        let tiles = [];
        for (let i = 0; i < 8; i++) {
            tiles.push(this.renderTile());
        }
        return tiles;
    }
}