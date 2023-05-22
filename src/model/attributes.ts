export const attributes = {
    flexDirectionValues: [
        {
            name: "Row",
            value: 'row',
            description: "O eixo principal do flex container é definido para ser o mesmo que a direção do texto. Os pontos de início e término principais são iguais à direção do conteúdo.",
        },
        {
            name: "Row Reverse",
            value: "row-reverse",
            description: "Se comporta da mesma forma que row porém os pontos de inicio e término seram invertidos (permutados).",
        },
        {
            name: "Column",
            value: 'column',
            description: "O eixo principal do flex container é igual ao eixo do bloco. Os pontos de início e término principais são iguais aos pontos de antes e depois do modo de escrita.",
        },
        {
            name: "Column Reverse",
            value: "column-reverse",
            description: "Se comporta da mesma forma que column porém os pontos de inicio e término seram invertidos (permutados).",
        },
    ],
    flexWrapValues: [
        {
            name: "Wrap",
            value: "wrap",
            description: "Os itens flexíveis são quebrados em multiplas linhas. O cross-start é equivalente a iniciar ou antes dependendo do valor do flex-direction e cross-end é o oposto do especificado cross-start.",
        },
        {
            name: "Wrap Reverse",
            value: "wrap-reverse",
            description: "Se comporta da mesma maneira que o wrap mas a de linha ocorre na direção contrária, ou seja, para a linha acima.",
        },
        {
            name: "No Wrap",
            value: "no-wrap",
            description: "Os itens flexíveis são agrupados em uma unica linha, o que pode fazer com que o flex container transborde. O cross-start é equivalente ao início ou antes, dependendo do valor da flex-direction. Este é o valor padrão.",
        },
    ],
    justifyContentValues: [
        {
            name: "Flex Start",
            value: "flex-start",
            description: "Os itens são embalados nivelados um ao outro em direção à borda do contêiner de alinhamento, dependendo do lado inicial principal do contêiner flexível. Isso se aplica apenas a itens de layout flexível. Para itens que não são filhos de um flex container, esse valor é tratado como start.",
        },
        {
            name: "Flex End",
            value: "flex-end",
            description: "Os itens são embalados nivelados um ao outro em direção à borda do contêiner de alinhamento, dependendo do lado da extremidade principal do contêiner flexível. Isso se aplica apenas a itens de layout flexível. Para itens que não são filhos de um flex container, esse valor é tratado como end.",
        },
        {
            name: "Center",
            value: "center",
            description: "Os itens são embalados nivelados um ao outro em direção ao centro do contêiner de alinhamento ao longo do eixo principal.",
        },
        {
            name: "Space Between",
            value: "space-between",
            description: "Os itens são distribuídos uniformemente dentro do contêiner de alinhamento ao longo do eixo principal. O espaçamento entre cada par de itens adjacentes é o mesmo. O primeiro item está nivelado com a borda inicial principal e o último item está nivelado com a borda final principal.",
        },
        {
            name: "Space Around",
            value: "space-around",
            description: "Os itens são distribuídos uniformemente dentro do contêiner de alinhamento ao longo do eixo principal. O espaçamento entre cada par de itens adjacentes é o mesmo. O espaço vazio antes do primeiro e depois do último item é igual a metade do espaço entre cada par de itens adjacentes.",
        },
        {
            name: "Space Evenly",
            value: "space-evenly",
            description: "Os itens são distribuídos uniformemente dentro do contêiner de alinhamento ao longo do eixo principal. O espaçamento entre cada par de itens adjacentes, a borda inicial principal e o primeiro item, e a borda final principal e o último item, são todos exatamente iguais.",
        },
    ],
    alignItemValues: [
        {
            name: "Flex Start",
            value: "flex-start",
            description: "As bordas da margem inicial cruzada dos itens flexíveis são niveladas com a borda inicial cruzada da linha.",
        },
        {
            name: "Flex End",
            value: "flex-end",
            description: "As bordas da margem cruzada dos itens flexíveis são niveladas com a borda cruzada da linha.",
        },
        {
            name: "Center",
            value: "center",
            description: "As caixas de margem dos itens flexíveis são centralizadas dentro da linha no eixo cruzado. Se o tamanho cruzado de um item for maior que o contêiner flexível, ele transbordará igualmente em ambas as direções.",
        },
        {
            name: "Baseline",
            value: "baseline",
            description: "Todos os itens flexíveis são alinhados de forma que suas linhas de base do contêiner flexível se alinhem. O item com a maior distância entre sua borda de margem inicial cruzada e sua linha de base é nivelado com a borda inicial cruzada da linha.",
        },
        {
            name: "Stretch",
            value: "stretch",
            description: "Os itens flexíveis são esticados de forma que o tamanho cruzado da caixa de margem do item seja o mesmo que a linha, respeitando as restrições de largura e altura.",
        }
    ]
}