export async function resolvedComponent<Props>(
  Component: (props: Props) => Promise<JSX.Element>,
  props: Props
) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}