import { ComboList } from "@/pages/Flashloans";

// export const getListOfFurucomboReceiveTokens = (combo: ComboList[]) => {
//   return combo
//     .reduce((acc: { id: string; amount: number }[], data) => {
//       const { outputEstimate, amount, selectedOption = "" } = data;

//       const outputs = Object.keys(outputEstimate)
//         .filter((id) => id !== "id")
//         .map((id) => {
//           const total = outputEstimate[id] as number;
//           return {
//             id: id,
//             amount: total * (amount || 0),
//           };
//         });

//       if (outputs.length) {
//         outputs.map(({ id, amount }) => {
//           const alreadyAdded = acc.find((op) => op.id === id);

//           if (alreadyAdded) {
//             return acc.map((op) =>
//               op.id === selectedOption
//                 ? { ...op, amount: (op.amount += amount) }
//                 : op
//             );
//           } else {
//             acc.push({ id, amount });
//           }
//         });
//       } else {
//         const alreadyAdded = acc.find((op) => op.id === selectedOption);
//         if (alreadyAdded) {
//           return acc.map((op) =>
//             op.id === selectedOption
//               ? { ...op, amount: (op.amount += amount || 0) }
//               : op
//           );
//         } else {
//           acc.push({ id: selectedOption, amount: amount || 0 });
//         }
//       }
//       return acc;
//     }, [])
//     .sort((a, b) => {
//       const textA = a.id.toUpperCase();
//       const textB = b.id.toUpperCase();
//       return textA < textB ? -1 : textA > textB ? 1 : 0;
//     });
// };
