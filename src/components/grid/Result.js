import React, {Component, createElement} from "react";
import styled from "styled-components";
import infoiconGreen from "./../../pictures/infoiconGreen.png"
import infoiconRed from "./../../pictures/infoiconRed.png"
import velasIcon from "./../../pictures/velasIcon.png"

export default class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verified: false,
            result: {
                metadata: {
                    name: 'Velasiraptor',
                    description: 'Nft Authy',
                    attributes: [
                        {value: ' '},
                        {value: ' '},
                        {value: ' '},
                        {value: ' '},
                        {value: ' '},
                        {value: ' '}
                    ]
                },
                valid: false,
                owner: ' ',
                issuer: ' ',
            }
        }

        this.isVerified = this.isVerified.bind(this);
        this.getFirstFew = this.getFirstFew.bind(this);
    }

    isVerified() {
        if (this.props.result.valid) {
            this.setState({verified: true});
        }
    }
    getFirstFew(hexadecimal){
        let firstfew = '';
        let lastfew = '';
        if (hexadecimal !== undefined){
            firstfew = hexadecimal.substring(0, 4);
            lastfew = hexadecimal.substring(hexadecimal.length -4, hexadecimal.length);
            return firstfew + '...' + lastfew;
        }
    }
    componentDidMount() {
        this.isVerified();
        this.setState({result: this.props.result})
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS)
        {
            if (this.props.result !== prevProps.result) {
                this.isVerified();
                this.setState({result: this.props.result})
            }
        }

    render() {
            return (
                <div className ={"smaller flex.row d-flex p-2"}>
                <img src={this.state.result.metadata.image} className={"nft"}/>
                    <div className={"block"}>
                <NFTDATARootRoot>
                    REsultComponent
                    <ValidStatus className={this.state.verified ? "verified" : "scam"}>
                        <Text1>Status of validation</Text1>
                        <Text2 className={this.state.verified ? "textVerified" : "textScam"}>{this.state.verified ? "Verified" : "Scam"}</Text2>
                        <InfoOutline
                            src={this.state.verified ? infoiconGreen : infoiconRed}
                        />
                    </ValidStatus>
                    <Data>
                        <FlexRow>
                            <BasicDataOfNFT>
                                <Text3>{this.state.result.metadata.name || undefined}</Text3>
                                <Paragraph>
                                    {this.state.result.metadata.description || undefined}
                                </Paragraph>
                            </BasicDataOfNFT>
                            <Price1>
                                <Text4>Price</Text4>
                                <NFTPrice>
                                    <VelasIcon
                                        src={velasIcon}
                                    />
                                    <Text5>1.3458</Text5>
                                </NFTPrice>
                            </Price1>
                        </FlexRow>
                        <FlexRow1>
                            <Collection>
                                <Attribute>Owner</Attribute>
                                <CollectionData>
                                    <FlexRow2>
                                        <Attribute1>{this.getFirstFew(this.state.result.owner || undefined)}</Attribute1>
                                    </FlexRow2>
                                </CollectionData>
                            </Collection>
                            <Collection>
                                <Attribute>Collection</Attribute>
                                <CollectionData>
                                    <FlexRow3>
                                        <Attribute3>{this.getFirstFew(this.state.result.issuer || undefined)}</Attribute3>
                                    </FlexRow3>
                                </CollectionData>
                            </Collection>
                        </FlexRow1>
                    </Data>
                    <AttributesSection>
                        <Text6>Attributes</Text6>
                        <AttributesRows>
                            <RowOfInfo>
                                <Attribute4>Background</Attribute4>
                                <Erty1>{this.state.result.metadata.attributes[0].value || undefined}</Erty1>
                            </RowOfInfo>
                            <RowOfInfo>
                                <Attribute5>Headset</Attribute5>
                                <Erty1>{this.state.result.metadata.attributes[4].value || undefined}</Erty1>
                            </RowOfInfo>
                            <RowOfInfo>
                                <Attribute5>Beard</Attribute5>
                                <Erty1>{this.state.result.metadata.attributes[2].value || undefined}</Erty1>
                            </RowOfInfo>
                        </AttributesRows>
                    </AttributesSection>
                </NFTDATARootRoot>
                    </div>
                </div>
            );
        }
    };

    const Collection = styled.div`
 /* width: 236px; */
  gap: 8px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
    const Attribute = styled.div`
  align-self: stretch;
  color: #9c9c9e;
  font-size: 12px;
  line-height: 16px;
`;
    const CollectionData = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
`;
    const RowOfInfo = styled.div`
  gap: 99px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
`;
    const Attribute5 = styled.div`
  color: #9c9c9e;
  font-size: 18px;
  line-height: 22px;
  white-space: pre-wrap;
`;
    const Erty1 = styled.div`
  width: 268px;
  flex-grow: 1;
  color: #444445;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: right;
`;
    const NFTDATARootRoot = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
    const ValidStatus = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  border-style: solid;;
  overflow: hidden;
  border-radius: 16px;
  padding: 31px;
  border-width: 1px;
`;
    const Text1 = styled.div`
  color: #818082;
  font-size: 20px;
  line-height: 24px;
  white-space: nowrap;
`;
    const Text2 = styled.div`
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  text-decoration: underline;
  white-space: nowrap;
`;
    const InfoOutline = styled.img`
  width: 29px;
  height: 32px;
`;
    const Data = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: stretch;
  align-items: flex-start;
  border-style: solid;
  border-color: #bdb8d1;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 31px;
  border-width: 1px;
`;
    const FlexRow = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  border-style: solid;
  border-color: #bdb8d1;
  padding: 0px 0px 31px 0px;
  border-width: 0px 0px 1px 0px;
`;
    const BasicDataOfNFT = styled.div`
/*  width: 309px; */
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
    const Text3 = styled.div`
  align-self: stretch;
  color: #444445;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
`;
    const Paragraph = styled.div`
  align-self: stretch;
  color: #a9a9ad;
  font-size: 12px;
  line-height: 16px;
`;
    const Price1 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #e1e0e3;
  overflow: hidden;
  border-radius: 16px;
  padding: 15px 31px;
`;
    const Text4 = styled.div`
  color: #a9a9ad;
  font-size: 12px;
  line-height: 16px;
  white-space: nowrap;
`;
    const NFTPrice = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
    const VelasIcon = styled.img`
  width: 26px;
  height: 26px;
`;
    const Text5 = styled.div`
  color: #444445;
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  white-space: nowrap;
`;
    const FlexRow1 = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
`;
    const FlexRow2 = styled.div`
  gap: 12px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
    const Attribute1 = styled.div`
/*   width: 180px; */
  flex-grow: 1;
  color: #444445;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;
    const FlexRow3 = styled.div`
  width: 180px;
  gap: 4px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
    const Attribute3 = styled.div`
      width: 240px;
      color: #444445;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;
    const Verified = styled.img`
  width: 24px;
  height: 24px;
`;
    const AttributesSection = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  border-style: solid;
  border-color: #bdb8d1;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px 0px rgba(185, 183, 253, 0.08);
  border-radius: 16px;
  padding: 31px;
  border-width: 1px;
`;
    const Text6 = styled.div`
  color: #444445;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  white-space: nowrap;
`;
    const AttributesRows = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
`;
    const Attribute4 = styled.div`
  color: #9c9c9e;
  font-size: 18px;
  line-height: 22px;
  white-space: nowrap;
`;
    const Erty = styled.div`
  width: 287px;
  flex-grow: 1;
  color: #444445;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: right;
`;
