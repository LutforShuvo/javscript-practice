function paperRequirement(book1, book2, book3) {
    const perBook1 = 100;
    const perBook2 = 200;
    const perBook3 = 300;
    const paperNeededForBook1 = book1 * perBook1;
    const paperNeededForBook2 = book2 * perBook2;
    const paperNeededForBook3 = book3 * perBook3;

    const totalPaper = paperNeededForBook1 + paperNeededForBook2 + paperNeededForBook3;

    return totalPaper;
}


const totalPapers = paperRequirement(1, 2, 1);

console.log(totalPapers);