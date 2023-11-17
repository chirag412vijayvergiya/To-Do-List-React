import { Box } from "./Box";

export function Main({
  onpriority1,
  onpriority2,
  onpriority3,
  onDeleteItems123,
  onDeleitem,
  ontoggleitem,
}) {
  return (
    <div className="main">
      <Box
        onitems={onpriority1}
        priority={1}
        onDeleteItems123={onDeleteItems123}
        onDeleitem={onDeleitem}
        ontoggleitem={ontoggleitem}
      >
        st-Priority
      </Box>
      <Box
        onitems={onpriority2}
        priority={2}
        onDeleteItems123={onDeleteItems123}
        onDeleitem={onDeleitem}
        ontoggleitem={ontoggleitem}
      >
        nd-Priority
      </Box>
      <Box
        onitems={onpriority3}
        priority={3}
        onDeleteItems123={onDeleteItems123}
        onDeleitem={onDeleitem}
        ontoggleitem={ontoggleitem}
      >
        rd-Priority
      </Box>
    </div>
  );
}
