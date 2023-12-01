import useWindowWidth from "../../../../hooks/useWindowWidth"

export default function LayoutComponentTwo() {
  const onScreenSize = useWindowWidth(600);
    
  return (
    <div className={onScreenSize ? 'small' : 'large'}>
        <h1>You are browsing on device.</h1>
    </div>
  )
}
