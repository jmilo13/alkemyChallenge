import Item from '@components/Item'

export default function List (props) {
    const { data, component } = props
    return data.map(item =><Item key={item.id} information={item} component={component}/>)
}