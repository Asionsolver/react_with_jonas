import useWindowWidth from "../../../../hooks/useWindowWidth"

export default function LayoutComponent() {
  const onScreenSize = useWindowWidth(768);
    
  return (
    <div>
        <h1>You are browsing on {onScreenSize ? 'small' : 'large'} device.</h1>
    </div>
  )
}
