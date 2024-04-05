export type Die = {
  value: number;
  isHeld: boolean;
  id: string;
  holdDice: () => void;
};

type DadoSuelto = Omit<Die, "id">;

export default function Item({ value, isHeld, holdDice }: DadoSuelto) {
  return (
    <button
      className={`size-[35px] flex align-middle ${
        isHeld ? "bg-tenziesSelected" : "bg-white "
      } justify-center rounded-md shadow p-3 items-center`}
      onClick={holdDice}>
      {value}
    </button>
  );
}
