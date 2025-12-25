function withLoading<T extends object> (Component: React.ComponentType<T>) {
  return (props: T & {isLoading: boolean}) => {
    const { isLoading, ...rest } = props
    return isLoading ? <p>Loading...</p> : <Component {...rest as T}/>
  }
}

type UserProps = {
  name: string;
}

const UserComponent: React.FC<UserProps> = ({name}) => {
  return <p>Hell, {name}</p>
} 

const UserWithLoading = withLoading(UserComponent)

export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading isLoading={true} name="Carlos"/>
      <UserWithLoading isLoading={false} name="Mario"/>
    </div>
  );
};
